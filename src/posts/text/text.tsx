import { ReactComponentWithChildren } from "@/shared/types/component";
import styles from "./text.module.scss";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface WithAdditionalClasses {
  additionalClasses?: string;
}

export const ParagraphText: ReactComponentWithChildren<
  WithAdditionalClasses
> = ({ children, additionalClasses }) => {
  const classes = classNames(styles.paragraph, additionalClasses);

  return <p className={classes}>{children}</p>;
};

export const MainHeading: ReactComponentWithChildren<WithAdditionalClasses> = ({
  children,
  additionalClasses,
}) => {
  const classes = classNames(styles.heading, additionalClasses);

  return <h1 className={classes}>{children}</h1>;
};

export const SecondaryHeading: ReactComponentWithChildren<
  WithAdditionalClasses
> = ({ children, additionalClasses }) => {
  const classes = classNames(styles.heading, additionalClasses);

  return <h2 className={classes}>{children}</h2>;
};

export const OrderedList: ReactComponentWithChildren = ({ children }) => {
  return <ol className={styles["ordered-list"]}>{children}</ol>;
};

export const getRendererFor =
  (Node: ReactComponentWithChildren, additionalProps: any = {}) =>
  // eslint-disable-next-line react/display-name
  (element: PropsWithChildren) =>
    <Node {...additionalProps}>{element.children}</Node>;
