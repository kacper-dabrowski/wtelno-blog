import { notFound } from "next/navigation";
import { getChurchContentBeforePost } from "../../posts/church/additionalContent";
import { Post } from "../../posts/components/post/post";
import { pageService } from "../../posts/service/postService";

export default async function ChurchPage() {
  const pageContent = await pageService.getPostBySlug("parafia");

  if (!pageContent) {
    return notFound();
  }

  const renderContent = await getChurchContentBeforePost();

  return (
    <Post renderContentBefore={renderContent ?? undefined} post={pageContent} />
  );
}
