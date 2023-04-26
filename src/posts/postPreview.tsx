import { PostPreviewModel } from "@/posts/service/types";
import Link from "next/link";

interface PostCardProps {
  post: PostPreviewModel;
}

export const PostCard = ({ post }: PostCardProps) => (
  <div>
    <div>{post.title}</div>
    <div>{post.createdAt.toString()}</div>
    <Link href={`/aktualnosci/${post.slug}`}>Przeczytaj całość</Link>
  </div>
);
