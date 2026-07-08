import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { bookingSchema } from "@/lib/booking";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid booking request." }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO_EMAIL, BOOKING_FROM_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !BOOKING_TO_EMAIL || !BOOKING_FROM_EMAIL) {
    return NextResponse.json(
      { error: "Booking email is not configured. Add SMTP and booking email environment variables before production launch." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const details = Object.entries(parsed.data)
    .filter(([key]) => key !== "company")
    .map(([key, value]) => `${key}: ${value || "N/A"}`)
    .join("\n");

  await transporter.sendMail({
    to: BOOKING_TO_EMAIL,
    from: BOOKING_FROM_EMAIL,
    replyTo: parsed.data.email,
    subject: `New PDX to Shuttle booking request from ${parsed.data.name}`,
    text: details,
  });

  return NextResponse.json({ ok: true });
}
