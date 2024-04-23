"use client";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";
import { FaHome, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  const currentPath = usePathname();

  console.log(currentPath);

  return (
    <nav className={styles.container}>
      <section className={styles.tabContainer}>
        <Link href={"/dashboard"} className={styles.tab}>
          <FaHome className={styles.tabIcon} />
        </Link>

        <Link href={"/dashboard/add-location"} className={styles.tab}>
          <FaMapMarkerAlt className={styles.tabIcon} />
        </Link>

        <Link href={"/dashboard/profile"} className={styles.tab}>
          <FaUserAlt className={styles.tabIcon} />
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
