export const getInputType = (
  currentType: string,
  isPasswordVisible: boolean
) => {
  switch (currentType) {
    case "password":
      if (isPasswordVisible) {
        return "text";
      }
      return "password";
    default:
      return currentType;
  }
};
