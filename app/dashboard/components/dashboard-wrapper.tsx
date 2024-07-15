import { ReactNode } from "react";

import { dasboardStyles as styles } from "@/styles";

interface Props {
  pageTitle: string;
  children: ReactNode;
}

const DashBoardWrapper = ({ pageTitle, children }: Props) => {
  return (
    <section className={styles.dashboard_wrapper}>
      <header className={styles.dashboard_wrapper_header}>
        <h1>{pageTitle}</h1>
      </header>
      {children}
    </section>
  );
};

export default DashBoardWrapper;
