import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import { WithChildren } from "../../shared/types/component";
import styles from "./renderers.module.scss";

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

export const UnorderedList: FC<WithChildren<WithAdditionalClasses>> = ({
  children,
}) => {
  return <ul className={styles["unordered-list"]}>{children}</ul>;
};

export const ExternalAnchorTag: FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <a className={styles.link} target="_blank" {...props}>
      {children}
    </a>
  );
};

export const getRendererFor =
  (Node: FC<WithChildren>, additionalProps: any = {}) =>
  // eslint-disable-next-line react/display-name
  (element: PropsWithChildren<Record<string, any>>) => {
    return (
      <Node {...element?.node?.properties} {...additionalProps}>
        {element.children}
      </Node>
    );
  };
