import * as z from "zod";

const LETTERS_NUMBERS_DOTS_REGEX = /^[a-zA-Z0-9.]+$/;

export const VALIDATION_REGISTRATION_SCHEMA = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .regex(
        LETTERS_NUMBERS_DOTS_REGEX,
        "First name can only contain letters, numbers, and dots"
      ),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .regex(
        LETTERS_NUMBERS_DOTS_REGEX,
        "Last name can only contain letters, numbers, and dots"
      ),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(
        LETTERS_NUMBERS_DOTS_REGEX,
        "Password can only contain letters, numbers, and dots"
      ),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms and Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
