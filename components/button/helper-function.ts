import { BUTTON_COLORS } from "@/utils/constants";

export const controlWidth = (width?: string) => {
  if (width) {
    return { width: width };
  }
  return { width: "100%" };
};

export const controlBgColor = (isDisabled?: boolean, color?: string) => {
  if (color && !isDisabled) {
    return { backgroundColor: color };
  }

  if (color && isDisabled) {
    return { backgroundColor: BUTTON_COLORS.DISABLED };
  }

  if (!color && !isDisabled) {
    return { backgroundColor: BUTTON_COLORS.DEFAULT };
  }

  if (!color && isDisabled) {
    return { backgroundColor: BUTTON_COLORS.DISABLED };
  }

  return { backgroundColor: BUTTON_COLORS.DEFAULT };
};
