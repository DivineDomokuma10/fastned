import { ReactNode } from "react";

import NavBar from "@/components/navbar";
import styles from "./dashboard.module.css";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={styles.layoutContainer}>
      <NavBar />
      {children}
    </main>
  );
}
