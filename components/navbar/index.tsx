"use client";
import { usePathname } from "next/navigation";

import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import { navbarStyles as styles } from "@/styles";

export interface NavProp {
  currentPath: string;
  styles: {
    readonly [key: string]: string;
  };
}

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <>
      <MobileNav styles={styles} currentPath={currentPath} />
      <DesktopNav styles={styles} currentPath={currentPath} />
    </>
  );
};

export default NavBar;
