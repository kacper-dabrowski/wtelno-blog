"use client";

import { ReactComponentWithChildren } from "@/shared/types/component";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./main.module.scss";

interface MainNavbarItemProps {
  title: string;
  href: string;
  activeClass?: string;
  exact?: boolean;
}

export const MainNavbarItem: ReactComponentWithChildren<
  MainNavbarItemProps
> = ({ title, href, activeClass = styles.active, exact }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const containerClasses = classNames(
    { [activeClass]: isActive },
    styles.itemContainer
  );

  return (
    <li className={containerClasses}>
      <Link href={href} className={styles.item} legacyBehavior>
        {title}
      </Link>
    </li>
  );
};
