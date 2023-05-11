import { MainHeading } from "../../posts/text/text";
import { ReactComponentWithChildren } from "../../shared/types/component";

const NewsPageLayout: ReactComponentWithChildren = ({ children }) => {
  return (
    <main>
      <MainHeading>Aktualności</MainHeading>
      {children}
    </main>
  );
};

export default NewsPageLayout;
