import { MainHeading } from "../../posts/text/text";
import { ReactComponentWithChildren } from "../../shared/types/component";

const Layout: ReactComponentWithChildren = ({ children }) => {
  return (
    <main>
      <MainHeading>Galeria</MainHeading>
      {children}
    </main>
  );
};

export default Layout;
