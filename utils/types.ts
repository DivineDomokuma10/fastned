import { CHARGER_STATUS, CHARGER_TYPE, FORM_FIELDS_NAMES } from "./enums";

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

export interface Charger {
  id: number;
  serialNumber: string;
  lastUpdate: string;
  type: CHARGER_TYPE.HPC | CHARGER_TYPE.T52 | CHARGER_TYPE.T53C;
  status:
    | CHARGER_STATUS.REMOVED
    | CHARGER_STATUS.CONNECTED
    | CHARGER_STATUS.NOT_CONNECTED;
}

export interface Location {
  id: number;
  name: string;
  locationNo: number;
  country: string;
  postalCode: string;
  lastUpdate: string;
  chargers: Charger[];
}

export type TableRowData = Location & Charger;
