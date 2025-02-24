import z from "zod";
import { emailValidation, passwordValidation } from "./signupSchema";

export const loginValidation = z.object({
  email: emailValidation,
  password: passwordValidation,
});
