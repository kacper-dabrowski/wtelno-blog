import { PostModel } from "@/posts/service/types";
import { ReactComponent } from "@/shared/types/component";
import ReactMarkdown from "react-markdown";

interface PostProps {
  post: PostModel;
}

export const Post: ReactComponent<PostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.createdAt.toString()}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};
