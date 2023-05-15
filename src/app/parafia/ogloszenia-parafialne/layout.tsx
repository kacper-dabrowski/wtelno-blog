import { MainHeading } from "../../../posts/renderers/text";
import { ReactComponentWithChildren } from "../../../shared/types/component";

const NewsPageLayout: ReactComponentWithChildren = ({ children }) => {
  return (
    <main>
      <MainHeading>Ogłoszenia parafialne</MainHeading>
      {children}
    </main>
  );
};

export default NewsPageLayout;
