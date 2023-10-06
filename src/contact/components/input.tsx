import classNames from "classnames";
import { FC, HTMLProps } from "react";
import styles from "./input.module.scss";

interface ContactInputProps
  extends Omit<HTMLProps<HTMLInputElement>, "className"> {
  additionalClassName?: string;
  textArea?: boolean;
}

export const ContactInput: FC<ContactInputProps> = ({
  additionalClassName,
  textArea,
  ...props
}) => {
  const inputClasses = classNames(styles.input, additionalClassName);
  const textAreaClasses = classNames(inputClasses, styles.textarea);

  if (textArea) {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>
          {props.label}
          <textarea className={textAreaClasses} />
        </label>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {props.label}
        <input {...props} className={inputClasses} />
      </label>
    </div>
  );
};
