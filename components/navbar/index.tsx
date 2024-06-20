"use client";
import { usePathname } from "next/navigation";

import MobileNav from "./mobile-nav";
import { navbarStyles as styles } from "@/styles";
import DesktopNav from "./desktop-nav";

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
