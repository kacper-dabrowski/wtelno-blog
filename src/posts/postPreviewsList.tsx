import { ReactComponentWithChildren } from "../shared/types/component";
import { SinglePostPreview } from "./singlePostPreview";
import { PostPreviewModel } from "./service/types";
import styles from "./postPreviewsList.module.scss";

interface PostPreviewListProps {
  posts: PostPreviewModel[];
}

export const PostPreviewList: ReactComponentWithChildren<
  PostPreviewListProps
> = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <SinglePostPreview post={post} key={post.title} />
      ))}
    </div>
  );
};
