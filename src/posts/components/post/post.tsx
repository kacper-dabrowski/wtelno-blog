import { Card } from "@/shared/components/card/card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FC } from "react";
import styles from "./post.module.scss";

interface PostProps {
  post: { content: any };
}

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <Card additionalClasses={styles.postCard}>
      {documentToReactComponents(post.content)}
    </Card>
  );
};
