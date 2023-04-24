import { ReactComponentWithChildren } from "@/shared/types/component";
import { MainNavbarItem } from "./item";
import styles from "./main.module.scss";

interface NavbarProps {}

export const MainNavbar: ReactComponentWithChildren<NavbarProps> = () => (
  <nav className={styles["main-container"]}>
    <ul className={styles.list}>
      <MainNavbarItem title="Strona główna" href="/" exact />
      <MainNavbarItem title="Aktualności" href="/aktualnosci" exact />
    </ul>
  </nav>
);
