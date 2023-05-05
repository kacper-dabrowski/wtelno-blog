import { ReactComponentWithChildren } from "@/shared/types/component";
import { MainNavbarItem } from "./item";
import styles from "./main.module.scss";

interface NavbarProps {}

export const MainNavbar: ReactComponentWithChildren<NavbarProps> = () => (
  <nav className={styles["main-container"]}>
    <ul className={styles.list}>
      <MainNavbarItem title="Strona główna" href="/strona-glowna" exact />
      <MainNavbarItem title="Aktualności" href="/aktualnosci" exact />
      <MainNavbarItem title="Galeria" href="/galeria" />
      <MainNavbarItem
        title="Regulamin cmentarza"
        href="/regulamin-cmentarza"
        exact
      />
    </ul>
  </nav>
);
