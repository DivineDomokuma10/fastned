import { FORM_FIELDS_NAMES } from "./constants";

export interface LoginFormFields {
  email: string;
  password: string;
}

export interface SignupFormFields {
  email: string;
  password: string;
  confirm_password: string;
}

export interface FormFieldInterface {
  type: string;
  placeHolder: string;
  name: FORM_FIELDS_NAMES;
  initalValue: string | number;
}
