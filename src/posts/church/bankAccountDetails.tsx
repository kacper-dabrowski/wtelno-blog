import { FC } from "react";
import { ParagraphText, ThirdLevelHeading } from "../renderers/text";
import styles from "./additionalContent.module.scss";
import { BankAccountDetails } from "./dto";

interface BankAccountDetailsProps extends BankAccountDetails {}

export const BankAccountDetailsList: FC<BankAccountDetailsProps> = ({
  name,
  title,
  accountNumber,
}) => {
  return (
    <section className={styles.bankAccountDetails}>
      <ThirdLevelHeading>Dane parafialnego konta bankowego</ThirdLevelHeading>
      <div>
        <p className={styles.label}>Nazwa odbiorcy:</p>
        <ParagraphText>{name}</ParagraphText>
      </div>
      <div>
        <p className={styles.label}>Tytułem:</p>
        <ParagraphText>{title}</ParagraphText>
      </div>
      <div>
        <p className={styles.label}>Nr konta bankowego na cele remontowe:</p>
        <ParagraphText>{accountNumber}</ParagraphText>
      </div>
    </section>
  );
};
