import {
  CHARGERS_TABLE_HEADER_TITLES,
  LOCATIONS_TABLE_HEADER_TITLES,
} from "@/utils/constants";
import { tableStyles as styles } from "@/styles";

interface Props {
  headerType: "location" | "charger";
}

const TableHeader = ({ headerType }: Props) => {
  return (
    <section className={styles.table_header}>
      {headerType === "location" &&
        LOCATIONS_TABLE_HEADER_TITLES.map((headerTitle) => (
          <div key={headerTitle} className={styles.table_header_items}>
            <span>{headerTitle}</span>
          </div>
        ))}

      {headerType === "charger" &&
        CHARGERS_TABLE_HEADER_TITLES.map((headerTitle) => (
          <div key={headerTitle} className={styles.table_header_items}>
            <span>{headerTitle}</span>
          </div>
        ))}
    </section>
  );
};

export default TableHeader;
