"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  ["pickupLocation", "Pickup location", "text"],
  ["dropoffLocation", "Dropoff location", "text"],
  ["date", "Date", "date"],
  ["time", "Time", "time"],
  ["passengers", "Passengers", "number"],
  ["luggage", "Luggage", "number"],
  ["flightNumber", "Flight number", "text"],
  ["name", "Name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
] as const;

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok) {
      setStatus("error");
      setMessage(result.error || "Please review the form and try again.");
      return;
    }

    setStatus("success");
    form.reset();
    window.location.href = "/booking-success";
  }

  return (
    <form
      id="booking"
      onSubmit={onSubmit}
      className="rounded-md border border-[#d9e0ea] bg-white p-5 shadow-xl shadow-[#071426]/8 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(([name, label, type]) => (
          <label key={name} className="grid gap-2 text-sm font-semibold text-[#27364a]">
            {label}
            <input
              name={name}
              type={type}
              min={type === "number" ? 0 : undefined}
              required={!["flightNumber"].includes(name)}
              className="focus-ring min-h-12 rounded-md border border-[#ccd6e3] bg-[#fbfcfe] px-3 text-base text-[#071426]"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-[#27364a]">
        Special requests
        <textarea
          name="specialRequests"
          rows={4}
          className="focus-ring rounded-md border border-[#ccd6e3] bg-[#fbfcfe] px-3 py-3 text-base text-[#071426]"
        />
      </label>
      <label className="sr-only">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-5 min-h-12 w-full rounded-md bg-[#071426] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#10243d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending request..." : "Request Booking"}
      </button>
      {message ? (
        <p className={`mt-4 text-sm ${status === "error" ? "text-red-700" : "text-emerald-700"}`} role="status">
          {message}
        </p>
      ) : null}
      <p className="mt-4 text-xs leading-6 text-[#64748b]">
        This form sends a reservation request, not an automatic confirmation. Final availability,
        timing, and pricing are confirmed by the PDX to Shuttle team.
      </p>
    </form>
  );
}
