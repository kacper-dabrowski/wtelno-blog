import { newsService } from "@/posts/service/postService";
import { PostCard } from "../../posts/postPreview";

export default async function NewsPage() {
  const posts = await getPostsPreview();

  return posts?.map((post) => <PostCard key={post.slug} post={post} />);
}

function getPostsPreview() {
  return newsService.getPostPreviews();
}
