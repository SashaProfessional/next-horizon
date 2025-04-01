import * as z from "zod";

export const VALIDATION_RESET_PASSWORD_SCHEMA = z.object({
  email: z.string().email("Invalid email address"),
});
