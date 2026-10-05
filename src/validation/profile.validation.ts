import { z } from "zod";

export const UpdateProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .optional(),

  phone: z
    .string()
    .trim()
    .regex(/^01[3-9]\d{8}$/, "Please provide a valid Bangladeshi phone number")
    .optional(),

  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters")
    .max(300, "Address must not exceed 300 characters")
    .optional(),

  feederId: z.string().optional(),
});
