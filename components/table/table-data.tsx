import { tableStyles as styles } from "@/styles";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  data?: string | number;
}

const TableData = ({ children, data }: Props) => {
  return (
    <div className={styles.table_row_items}>
      {(children && children) || (data && data)}
    </div>
  );
};

export default TableData;
