import { FC, HTMLProps } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

interface ContactInputProps
  extends Omit<HTMLProps<HTMLInputElement>, "className"> {
  additionalClassName?: string;
}

export const ContactInput: FC<ContactInputProps> = ({
  additionalClassName,
  ...props
}) => {
  const inputClasses = classNames(styles.input, additionalClassName);
  const textAreaClasses = classNames(inputClasses, styles.textarea);

  if (props.type === "textarea") {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{props.label}</label>
        <textarea className={textAreaClasses} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{props.label}</label>
      <input {...props} className={inputClasses} />
    </div>
  );
};
