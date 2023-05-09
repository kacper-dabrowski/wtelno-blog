import { MarkdownPostService } from "../../posts/service/postService";

interface PageParams {
  slug: string;
}

export const getSlugsFromService = (
  service: MarkdownPostService
): Promise<PageParams[]> => getPageSlugsFromMarkdownService(service);

async function getPageSlugsFromMarkdownService(service: MarkdownPostService) {
  const posts = await service.getPostPreviews();

  if (!posts) {
    return [];
  }

  return posts.map(({ slug }) => ({ slug }));
}
