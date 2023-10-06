import { MainHeading } from "@/posts/renderers/text";
import { FC } from "react";
import { WithChildren } from "../../shared/types/component";

const NewsPageLayout: FC<WithChildren> = ({ children }) => {
  return (
    <main>
      <MainHeading>Aktualności</MainHeading>
      {children}
    </main>
  );
};

export default NewsPageLayout;
