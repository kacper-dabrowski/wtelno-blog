import { ReactComponent } from "@/shared/types/component";
import { BankAccountDetails } from "./dto";
import styles from "./additionalContent.module.scss";
import { ParagraphText, ThirdLevelHeading } from "../renderers/text";

interface BankAccountDetailsProps extends BankAccountDetails {}

export const BankAccountDetailsList: ReactComponent<
  BankAccountDetailsProps
> = ({ name, title, accountNumber }) => {
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
