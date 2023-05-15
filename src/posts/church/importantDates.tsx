import { ReactComponent } from "../../shared/types/component";
import { ImportantDate } from "./dto";

interface ImportantDatesListProps {
  dates: ImportantDate[];
}

export const ImportantDatesList: ReactComponent<ImportantDatesListProps> = ({
  dates,
}) => {
  return (
    <div>
      {dates.map(({ title, description }) => (
        <div key={description}>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      ))}
    </div>
  );
};
