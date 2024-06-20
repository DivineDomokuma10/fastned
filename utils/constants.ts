export enum NUMBERS {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
}
export enum FORM_FIELDS_NAMES {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirm_password",
}
export enum BUTTON_COLORS {
  DISABLED = "#eee",
  DEFAULT = "#2cd82c",
}

export const LOGIN_FORM_FIELDS = [
  {
    type: "email",
    initalValue: "",
    placeHolder: "Email",
    name: FORM_FIELDS_NAMES.EMAIL,
  },
  {
    type: "password",
    initalValue: "",
    placeHolder: "Password",
    name: FORM_FIELDS_NAMES.PASSWORD,
  },
];

export const SIGNUP_FORM_FIELDS = [
  {
    type: "email",
    initalValue: "",
    placeHolder: "Email",
    name: FORM_FIELDS_NAMES.EMAIL,
  },
  {
    type: "password",
    initalValue: "",
    placeHolder: "Password",
    name: FORM_FIELDS_NAMES.PASSWORD,
  },
  {
    type: "password",
    initalValue: "",
    placeHolder: "Confirm Password",
    name: FORM_FIELDS_NAMES.CONFIRM_PASSWORD,
  },
];
