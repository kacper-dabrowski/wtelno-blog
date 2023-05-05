import { MainHeading } from "../../posts/text/text";
import { ReactComponentWithChildren } from "../../shared/types/component";

const Layout: ReactComponentWithChildren = ({ children }) => {
  return (
    <section>
      <MainHeading>Galeria</MainHeading>
      <div>{children}</div>
    </section>
  );
};

export default Layout;
