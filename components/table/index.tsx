import TableRow from "./table-row";
import TableHeader from "./table-header";
import { TableRowData } from "@/utils/types";
import { tableStyles as styles } from "@/styles";

export type DataProps<T> = {
  [X in keyof T]?: T[X];
};

interface Props<Z> {
  rowData: DataProps<Z>[];
  headerType: "location" | "charger";
}

const Table = <R extends TableRowData>({ headerType, rowData }: Props<R>) => {
  return (
    <main className={styles.table}>
      <TableHeader headerType={headerType} />
      {rowData.map((item, index) => (
        <TableRow
          index={index}
          key={item.id}
          dataProps={item}
          headerType={headerType}
        />
      ))}
    </main>
  );
};

export default Table;
