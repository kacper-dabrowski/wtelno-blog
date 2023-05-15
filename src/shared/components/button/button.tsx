import { HtmlHTMLAttributes } from "react";
import { ReactComponentWithChildren } from "../../types/component";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ReadWholePostButtonProps {
  buttonProps?: HtmlHTMLAttributes<HTMLButtonElement>;
  additionalClasses?: string;
}

export const ReadWholePostButton: ReactComponentWithChildren<
  ReadWholePostButtonProps
> = ({ buttonProps = {}, children, additionalClasses }) => {
  const classes = classNames(styles.button, additionalClasses);

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
};
