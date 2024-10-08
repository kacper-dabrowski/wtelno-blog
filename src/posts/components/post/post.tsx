import { renderImage } from "@/posts/renderers/image";
import { PostModel } from "@/posts/service/types";
import { Card } from "@/shared/components/card/card";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {
  ExternalAnchorTag,
  MainHeading,
  OrderedList,
  ParagraphText,
  SecondaryHeading,
  ThirdLevelHeading,
  UnorderedList,
  getRendererFor,
} from "../../renderers/text";
import styles from "./post.module.scss";

interface PostProps {
  post: PostModel;
  renderContentBefore?: () => JSX.Element;
}

export const Post: FC<PostProps> = ({ post, renderContentBefore }) => {
  return (
    <Card additionalClasses={styles.postCard}>
      <SecondaryHeading>{post.title}</SecondaryHeading>
      {renderContentBefore ? renderContentBefore() : null}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          p: getRendererFor(ParagraphText),
          h1: getRendererFor(MainHeading),
          h2: getRendererFor(SecondaryHeading),
          h3: getRendererFor(ThirdLevelHeading),
          ol: getRendererFor(OrderedList),
          a: getRendererFor(ExternalAnchorTag),
          ul: getRendererFor(UnorderedList),
          img: (node) => renderImage(node, styles.image),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </Card>
  );
};
