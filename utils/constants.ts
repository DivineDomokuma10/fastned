import { Location } from "./types";
import { CHARGER_STATUS, CHARGER_TYPE, FORM_FIELDS_NAMES } from "./enums";

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

export const TEST_ITEMS: Location[] = [
  {
    id: 1,
    country: "USA",
    postalCode: "",
    name: "Aalscholer",
    locationNo: 112233,
    lastUpdate: new Date().getSeconds().toLocaleString(),
    chargers: [
      {
        id: 11,
        type: CHARGER_TYPE.T53C,
        serialNumber: "T12-345-055",
        status: CHARGER_STATUS.CONNECTED,
        lastUpdate: "",
      },
      {
        id: 12,
        type: CHARGER_TYPE.HPC,
        serialNumber: "T12-145-3blum55",
        status: CHARGER_STATUS.NOT_CONNECTED,
        lastUpdate: "",
      },
    ],
  },
  {
    id: 2,
    country: "NGN",
    postalCode: "",
    name: "Ayebanoah",
    locationNo: 312837,
    lastUpdate: new Date().toDateString(),
    chargers: [
      {
        id: 21,
        type: CHARGER_TYPE.T53C,
        serialNumber: "T12-345-055",
        status: CHARGER_STATUS.CONNECTED,
        lastUpdate: "",
      },
      {
        id: 22,
        type: CHARGER_TYPE.T52,
        status: CHARGER_STATUS.REMOVED,
        serialNumber: "T12-145-3blum55",
        lastUpdate: new Date().toDateString(),
      },
    ],
  },
];

export const LOCATIONS_TABLE_HEADER_TITLES = [
  "Location",
  "Location no",
  "Chargers",
  "Country",
  "Updated at",
  "Actions",
];

export const CHARGERS_TABLE_HEADER_TITLES = [
  "Id",
  "Type",
  "Serial no",
  "Status",
  "Updated at",
  "Actions",
];
