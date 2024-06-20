import Link from "next/link";
import { FaHome, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { NavProp } from ".";

const MobileNav = ({ styles, currentPath }: NavProp) => {
  return (
    <nav className={styles.mobile_container}>
      <section className={styles.mobile_tabContainer}>
        <Link
          href={"/dashboard"}
          className={
            currentPath == "/dashboard"
              ? styles.mobile_active
              : styles.mobile_tab
          }
        >
          <FaHome className={styles.mobile_tabIcon} />
        </Link>

        <Link
          href={"/dashboard/add-location"}
          className={
            currentPath == "/dashboard/add-location"
              ? styles.mobile_active
              : styles.mobile_tab
          }
        >
          <FaMapMarkerAlt className={styles.mobile_tabIcon} />
        </Link>

        <Link
          href={"/dashboard/profile"}
          className={
            currentPath == "/dashboard/profile"
              ? styles.mobile_active
              : styles.mobile_tab
          }
        >
          <FaUserAlt className={styles.mobile_tabIcon} />
        </Link>
      </section>
    </nav>
  );
};

export default MobileNav;
