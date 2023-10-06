import { FC } from "react";
import styles from "./card.module.scss";
import classNames from "classnames";
import { WithChildren } from "../../types/component";

interface CardProps {
  additionalClasses?: string;
}

export const Card: FC<WithChildren<CardProps>> = ({
  children,
  additionalClasses,
}) => {
  const classes = classNames(styles.card, additionalClasses);
  return <div className={classes}>{children}</div>;
};
