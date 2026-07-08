import { z } from "zod";

export const bookingSchema = z.object({
  pickupLocation: z.string().min(4, "Enter a pickup location."),
  dropoffLocation: z.string().min(4, "Enter a dropoff location."),
  date: z.string().min(1, "Choose a date."),
  time: z.string().min(1, "Choose a time."),
  passengers: z.coerce.number().int().min(1).max(30),
  luggage: z.coerce.number().int().min(0).max(40),
  flightNumber: z.string().max(40).optional(),
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a phone number."),
  specialRequests: z.string().max(1000).optional(),
  company: z.string().max(0).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
