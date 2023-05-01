import { PostModel } from "@/posts/service/types";
import { ReactComponent } from "@/shared/types/component";
import ReactMarkdown from "react-markdown";
import { Card } from "./card";
import styles from "./post.module.scss";
import {
  MainHeading,
  OrderedList,
  ParagraphText,
  SecondaryHeading,
  getRendererFor,
} from "./text/text";
import rehypeRaw from "rehype-raw";
interface PostProps {
  post: PostModel;
}

export const Post: ReactComponent<PostProps> = ({ post }) => {
  return (
    <Card additionalClasses={styles.postCard}>
      <MainHeading>{post.title}</MainHeading>
      {/* <p>{post.createdAt.toString()}</p> */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          p: getRendererFor(ParagraphText),
          h1: getRendererFor(MainHeading),
          h2: getRendererFor(SecondaryHeading),
          ol: getRendererFor(OrderedList),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </Card>
  );
};
