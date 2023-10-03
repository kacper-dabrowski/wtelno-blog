import { ReactComponentWithChildren } from "@/shared/types/component";
import { MainNavbarItem } from "./item";
import styles from "./main.module.scss";
import { routes } from "./routes";

export const MainNavbar: ReactComponentWithChildren = () => (
  <nav className={styles["main-container"]}>
    <ul className={styles.list}>
      {routes.map(({ title, href, hasSubpages }) => (
        <MainNavbarItem
          title={title}
          href={href}
          exact={hasSubpages}
          key={href}
        />
      ))}
    </ul>
  </nav>
);
