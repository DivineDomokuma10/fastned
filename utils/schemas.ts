import { NUMBERS } from "@/utils/constants";
import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const signUpSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(NUMBERS.EIGHT, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[\d]/, "Password must contain at least one digit")
      .required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required(),
  })
  .required();
