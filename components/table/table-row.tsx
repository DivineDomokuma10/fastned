import { ReactElement } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { DataProps } from ".";
import Button from "../button";
import TableData from "./table-data";
import { TableRowData } from "@/utils/types";
import { getRowBg } from "./helper-function";
import { tableStyles as styles } from "@/styles";

interface Props<T> {
  index: number;
  dataProps: DataProps<T>;
  headerType: "location" | "charger";
}

const TableRow = <R extends TableRowData>({
  index,
  dataProps,
  headerType,
}: Props<R>): ReactElement => {
  return (
    <section
      className={styles.table_row}
      style={{ backgroundColor: getRowBg(index) }}
    >
      <TableData data={dataProps.name || dataProps.id} />
      <TableData data={dataProps.locationNo || dataProps.type} />
      <TableData data={dataProps.serialNumber || dataProps.chargers?.length} />
      <TableData data={dataProps.country || dataProps.status} />
      <TableData data={dataProps.lastUpdate} />
      {headerType === "location" ? (
        <TableData>
          <Button width="50px" icon={<FaTrash />} />
        </TableData>
      ) : (
        <TableData>
          <Button width="50px" icon={<FaEdit />} />
          <Button width="50px" icon={<FaTrash />} />
        </TableData>
      )}
    </section>
  );
};

export default TableRow;
