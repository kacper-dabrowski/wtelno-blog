import { ReactComponentWithChildren } from "../../../shared/types/component";
import { SinglePostPreview } from "./postPreview/singlePostPreview";
import { PostPreviewModel } from "../../service/types";
import styles from "./postPreviewsList.module.scss";

interface PostPreviewListProps {
  posts: PostPreviewModel[];
  baseUrl: string;
}

export const PostPreviewList: ReactComponentWithChildren<
  PostPreviewListProps
> = ({ posts, baseUrl }) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <SinglePostPreview post={post} key={post.title} baseUrl={baseUrl} />
      ))}
    </div>
  );
};
