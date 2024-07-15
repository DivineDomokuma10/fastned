"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiArrowToLeft } from "react-icons/bi";
import { FaHome, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { NavProp } from ".";
import Button from "../button";

const DesktopNav = ({ styles, currentPath }: NavProp) => {
  const router = useRouter();
  const [buttonText, setButtonText] = useState("Logout");

  const onLogout = () => {
    setButtonText("Logging Out ...");
    setTimeout(() => router.push("/login"), 500);
  };

  return (
    <nav className={styles.desktop_container}>
      <header className={styles.desktop_header}>
        <h1>FASTNED</h1>
      </header>

      <section className={styles.desktop_tabContainer}>
        <Link
          href={"/dashboard"}
          className={
            currentPath == "/dashboard"
              ? styles.desktop_active
              : styles.desktop_tab
          }
        >
          <FaHome className={styles.desktop_tabIcon} />
          <p className={styles.desktop_link_text}>Home</p>
        </Link>

        <Link
          href={"/dashboard/add-location"}
          className={
            currentPath == "/dashboard/add-location"
              ? styles.desktop_active
              : styles.desktop_tab
          }
        >
          <FaMapMarkerAlt className={styles.desktop_tabIcon} />
          <p className={styles.desktop_link_text}>Add Location </p>
        </Link>

        <Link
          href={"/dashboard/profile"}
          className={
            currentPath == "/dashboard/profile"
              ? styles.desktop_active
              : styles.desktop_tab
          }
        >
          <FaUserAlt className={styles.desktop_tabIcon} />
          <p className={styles.desktop_link_text}>View Profile</p>
        </Link>
      </section>

      <Button
        text={buttonText}
        onPress={onLogout}
        icon={<BiArrowToLeft className={styles.desktop_logout} />}
      />
    </nav>
  );
};

export default DesktopNav;
