import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import styles from "./renderers.module.scss";
import { WithChildren } from "../../shared/types/component";

interface WithAdditionalClasses {
  additionalClasses?: string;
}

const getHeadingRenderer: (
  level: 1 | 2 | 3
) => FC<WithChildren<WithAdditionalClasses>> = (level) => {
  function Component({
    children,
    additionalClasses,
  }: React.PropsWithChildren<WithAdditionalClasses>) {
    return React.createElement(
      `h${level}`,
      {
        className: classNames(styles.heading, additionalClasses),
      },
      children
    );
  }

  Component.displayName = `custom-h${level}`;

  return Component;
};

export const ParagraphText: FC<WithChildren<WithAdditionalClasses>> = ({
  children,
  additionalClasses,
}) => {
  const classes = classNames(styles.paragraph, additionalClasses);

  return <p className={classes}>{children}</p>;
};

export const MainHeading = getHeadingRenderer(1);

export const SecondaryHeading = getHeadingRenderer(2);

export const ThirdLevelHeading = getHeadingRenderer(3);

export const OrderedList: FC<WithChildren<WithAdditionalClasses>> = ({
  children,
}) => {
  return <ol className={styles["ordered-list"]}>{children}</ol>;
};

export const getRendererFor =
  (Node: FC<WithChildren>, additionalProps: any = {}) =>
  // eslint-disable-next-line react/display-name
  (element: PropsWithChildren) =>
    <Node {...additionalProps}>{element.children}</Node>;
