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
  const sortedPosts = posts
    .sort(descendingByDate)
    .map((post) => (
      <SinglePostPreview post={post} key={post.title} baseUrl={baseUrl} />
    ));

  return <div className={styles.container}>{sortedPosts}</div>;
};

function descendingByDate(a: PostPreviewModel, b: PostPreviewModel): number {
  return b.createdAt.getTime() - a.createdAt.getTime();
}
