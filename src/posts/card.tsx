import { ReactComponentWithChildren } from "@/shared/types/component";
import styles from "./card.module.scss";
import classNames from "classnames";

interface CardProps {
  additionalClasses?: string;
}

export const Card: ReactComponentWithChildren<CardProps> = ({
  children,
  additionalClasses,
}) => {
  const classes = classNames(styles.card, additionalClasses);
  return <div className={classes}>{children}</div>;
};
