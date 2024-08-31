import { getAllTabs } from "../../../content/contentful";
import { MainNavbarItem } from "./item";
import styles from "./main.module.scss";

export const MainNavbar = async () => {
  const tabs = await getAllTabs();
  return (
    <nav className={styles["main-container"]}>
      <ul className={styles.list}>
        {tabs.map(({ title, pathname, hasSubpages }) => (
          <MainNavbarItem
            title={title}
            href={getRootPathName(pathname)}
            exact={hasSubpages}
            key={pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

function getRootPathName(pathname: string) {
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
