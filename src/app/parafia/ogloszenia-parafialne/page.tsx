import { notFound } from "next/navigation";
import { PostPreviewList } from "../../../posts/postPreviewsList";
import { churchNewsService } from "../../../posts/service/postService";

export default async function ChurchNewsPage() {
  const posts = await getPostsPreview();

  if (!posts) {
    return notFound();
  }

  return <PostPreviewList baseUrl="" posts={posts} />;
}

function getPostsPreview() {
  return churchNewsService.getPostPreviews();
}
