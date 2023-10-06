"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./main.module.scss";

interface MainNavbarItemProps {
  title: string;
  href: string;
  activeClass?: string;
  exact?: boolean;
}

export const MainNavbarItem: FC<MainNavbarItemProps> = ({
  title,
  href,
  activeClass = styles.active,
  exact,
}) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const containerClasses = classNames(
    { [activeClass]: isActive },
    styles["item-container"]
  );

  return (
    <Link href={href} className={styles.item} title={title}>
      <li className={containerClasses} role="listitem">
        {title}
      </li>
    </Link>
  );
};
