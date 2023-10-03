/* eslint-disable @next/next/no-img-element */
import { ParagraphText } from "../renderers/text";
import styles from "./additionalContent.module.scss";

interface ParsonDataProps {
  parson: {
    name: string;
    title: string;
  };
  emailImageUrl: string;
  telephoneNumberImageUrl: string;
}

export const ParsonData = ({
  parson,
  emailImageUrl,
  telephoneNumberImageUrl,
}: ParsonDataProps) => {
  return (
    <div className={styles.parsonInfo}>
      <ParagraphText additionalClasses={styles.name}>
        {parson.title} {parson.name}
      </ParagraphText>
      <div className={styles.contact}>
        <ParagraphText>Dane kontaktowe:</ParagraphText>
        <img src={telephoneNumberImageUrl} alt="nr kontaktowy do proboszcza" />
        <img src={emailImageUrl} alt="email kontaktowy do proboszcza" />
      </div>
    </div>
  );
};
