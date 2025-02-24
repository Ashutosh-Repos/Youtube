import z from "zod";
export const userValidation = z
  .string()
  .min(4, { message: "must be at least of 4 charaters" })
  .max(10, { message: "must be less than of 11 charaters" })
  .regex(/^[a-zA-Z0-9_]+$/, {
    message: "must not contain any special charater",
  });

export const emailVerifCodeValidation = z
  .string()
  .length(6, { message: "must be of 6 characters" });

export const pinValidation = z
  .string()
  .regex(/^\d{8}$/, { message: "must be digits" })
  .length(8, { message: "must be of 8 digits" });

export const verifyFormValidation = z.object({
  usename: userValidation,
  emailVerifCode: emailVerifCodeValidation,
  pin: pinValidation,
});
