"use client";

import { ReactComponentWithChildren } from "@/shared/types/component";
import Link from "next/link";
import classNames from "classnames";
import styles from "./main.module.scss";
import { usePathname } from "next/navigation";

interface MainNavbarItemProps {
  title: string;
  href: string;
  activeClass?: string;
  exact?: boolean;
}

export const MainNavbarItem: ReactComponentWithChildren<
  MainNavbarItemProps
> = ({ title, href, activeClass = styles.active, exact }) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const containerClasses = classNames(
    { [activeClass]: isActive },
    styles["item-container"]
  );

  return (
    <Link href={href} className={styles.item}>
      <li className={containerClasses}>{title}</li>
    </Link>
  );
};
