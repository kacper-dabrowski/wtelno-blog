import { newsService } from "@/posts/service/postService";
import { notFound } from "next/navigation";
import { PostPreviewList } from "@/posts/components/postPreviewsList/postPreviewsList";

export default async function NewsPage() {
  const posts = await getPostsPreview();

  if (!posts) {
    return notFound();
  }

  return <PostPreviewList baseUrl="/aktualnosci" posts={posts} />;
}

function getPostsPreview() {
  return newsService.getPostPreviews();
}
