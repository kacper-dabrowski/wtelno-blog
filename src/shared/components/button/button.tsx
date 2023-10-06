import { FC, HtmlHTMLAttributes } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { WithChildren } from "../../types/component";

interface ReadWholePostButtonProps {
  buttonProps?: HtmlHTMLAttributes<HTMLButtonElement>;
  additionalClasses?: string;
}

export const ReadWholePostButton: FC<
  WithChildren<ReadWholePostButtonProps>
> = ({ buttonProps = {}, children, additionalClasses }) => {
  const classes = classNames(styles.button, additionalClasses);

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
};
