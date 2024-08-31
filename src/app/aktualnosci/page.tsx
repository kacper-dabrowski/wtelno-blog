import { notFound } from "next/navigation";
import { PostPreviewList } from "@/posts/components/postPreviewsList/postPreviewsList";
import { getPostPreviews } from "../../content/contentful";

export default async function NewsPage() {
  const posts = await getPostPreviews();

  if (!posts) {
    return notFound();
  }

  return <PostPreviewList baseUrl="/aktualnosci" posts={posts} />;
}
