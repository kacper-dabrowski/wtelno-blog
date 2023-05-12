import { PostModel } from "@/posts/service/types";
import { ReactComponent } from "@/shared/types/component";
import ReactMarkdown from "react-markdown";
import { Card } from "./card";
import styles from "./post.module.scss";
import {
  MainHeading,
  OrderedList,
  ParagraphText,
  PostImage,
  SecondaryHeading,
  ThirdLevelHeading,
  getRendererFor,
} from "./renderers/text";
import rehypeRaw from "rehype-raw";
import { renderImage } from "./renderers/image";
interface PostProps {
  post: PostModel;
}

export const Post: ReactComponent<PostProps> = ({ post }) => {
  return (
    <Card additionalClasses={styles.postCard}>
      <SecondaryHeading>{post.title}</SecondaryHeading>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          p: getRendererFor(ParagraphText),
          h1: getRendererFor(MainHeading),
          h2: getRendererFor(SecondaryHeading),
          h3: getRendererFor(ThirdLevelHeading),
          ol: getRendererFor(OrderedList),
          img: (node) => renderImage(node, styles.image),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </Card>
  );
};
