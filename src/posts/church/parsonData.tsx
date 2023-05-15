import { ReactComponent } from "../../shared/types/component";
import { ParagraphText } from "../renderers/text";
import { Parson } from "./dto";

interface ParsonDataProps {
  parson: Parson;
}
export const ParsonData: ReactComponent<ParsonDataProps> = ({ parson }) => {
  return (
    <div>
      <ParagraphText>
        {parson.title} {parson.name}
      </ParagraphText>
      <ParagraphText>Nr telefonu: {parson.telephoneNumber}</ParagraphText>
      <ParagraphText>Email: {parson.email}</ParagraphText>
    </div>
  );
};
