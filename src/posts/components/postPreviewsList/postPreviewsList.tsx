import { FC } from "react";
import { PostPreviewModel } from "../../service/types";
import { SinglePostPreview } from "./postPreview/singlePostPreview";
import styles from "./postPreviewsList.module.scss";

interface PostPreviewListProps {
  posts: PostPreviewModel[];
  baseUrl: string;
}

export const PostPreviewList: FC<PostPreviewListProps> = ({
  posts,
  baseUrl,
}) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <SinglePostPreview post={post} key={post.title} baseUrl={baseUrl} />
      ))}
    </div>
  );
};
