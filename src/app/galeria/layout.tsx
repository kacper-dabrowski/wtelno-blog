import { MainHeading } from "@/posts/renderers/text";
import { FC } from "react";
import { WithChildren } from "../../shared/types/component";

const Layout: FC<WithChildren> = ({ children }) => {
  return (
    <main>
      <MainHeading>Galeria</MainHeading>
      {children}
    </main>
  );
};

export default Layout;
