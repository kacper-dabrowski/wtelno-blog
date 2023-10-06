import { FC } from "react";
import styles from "./thumbnail.module.scss";
import { WithChildren } from "../shared/types/component";

export const ThumbnailsList: FC<WithChildren> = ({ children }) => (
  <div className={styles["thumbnail-wrapper"]}>{children}</div>
);
