import { ReactNode } from "react";

import { buttonStyles as styles } from "@/styles";
import { controlBgColor, controlWidth } from "./helper-function";
import { montserrat } from "@/fonts";

interface Props {
  text: string;
  color?: string;
  width?: string;
  icon?: ReactNode;
  disable?: boolean;
  onPress?: () => void;
}

const Button = ({ text, color, width, disable, icon, onPress }: Props) => {
  const props = {
    ...controlWidth(width),
    ...controlBgColor(disable, color),
  };

  return (
    <button
      style={props}
      onClick={onPress}
      className={styles.button}
      disabled={disable === undefined ? false : disable}
    >
      {icon ? icon : ""}
      <p className={montserrat.className}>{text}</p>
    </button>
  );
};

export default Button;
