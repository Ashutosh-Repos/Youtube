import z from "zod";

export const nameValidation = z
  .string()
  .min(2, { message: "must be at least of 2 charaters" })
  .regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, {
    message:
      "first letter must be uppercase, does not contain Numbers-(0-9) and special charaters-($@.*!+-/&#~`'?.etc), middle or last names separated by space e.g. John Doe, Anna Marie",
  });

export const passwordValidation = z
  .string()
  .min(8, { message: "must be at least of 8 charaters" })
  .max(13, { message: "must be less than of 14 characters" })
  .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message:
      "Starts with any character. Contains at least one digit. Contains at least one lowercase letter. Contains at least one uppercase letter.Has a minimum length of 8 characters.",
  });

export const phoneNumberValidation = z
  .string()
  .regex(/^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/, {
    message: "invalid phone number, must be of 10 digits",
  });

export const emailValidation = z
  .string()
  .email({ message: "must be valid email" });

export const ageValidation = z.number().min(1).max(2);

export const signupValidation = z.object({
  name: nameValidation,
  email: emailValidation,
  phone: phoneNumberValidation,
  password: passwordValidation,
  age: ageValidation,
});
