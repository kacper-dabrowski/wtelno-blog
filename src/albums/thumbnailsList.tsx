import { ReactComponentWithChildren } from "../shared/types/component";
import styles from "./thumbnail.module.scss";

export const ThumbnailsList: ReactComponentWithChildren = ({ children }) => (
  <div className={styles["thumbnail-wrapper"]}>{children}</div>
);
