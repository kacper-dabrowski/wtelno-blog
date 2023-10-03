import { ReactComponent } from "@/shared/types/component";
import { ImportantDate } from "./dto";
import styles from "./additionalContent.module.scss";
import { ThirdLevelHeading } from "../renderers/text";
interface ImportantDatesListProps {
  dates: ImportantDate[];
}

export const ImportantDatesList: ReactComponent<ImportantDatesListProps> = ({
  dates,
}) => (
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
