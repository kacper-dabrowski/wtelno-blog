import { FC } from "react";
import { ThirdLevelHeading } from "../renderers/text";
import styles from "./additionalContent.module.scss";
import { ImportantDate } from "./dto";
interface ImportantDatesListProps {
  dates: ImportantDate[];
}

export const ImportantDatesList: FC<ImportantDatesListProps> = ({ dates }) => (
  <div className={styles.importantDates}>
    <ThirdLevelHeading>Ważne daty</ThirdLevelHeading>
    {renderImportantDates(dates)}
  </div>
);

function renderImportantDates(dates: ImportantDate[]) {
  return dates.map(({ title, description }) => (
    <div key={description} className={styles.entry}>
      <div className={styles.dateTitle}>{title}</div>
      <div className={styles.dateDescription}>{description}</div>
    </div>
  ));
}
