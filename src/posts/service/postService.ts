import matter from "gray-matter";
import {
  FileSystemService,
  PostModel,
  PostPreviewModel,
  PostService,
} from "./types";
import { DefaultFileSystemService } from "./fileSystemService";

export class MarkdownPostService implements PostService {
  constructor(private fileSystemService: FileSystemService) {}

  async getPostPreviews(): Promise<PostPreviewModel[] | null> {
    const postList = await this.fileSystemService.getFilesInDirectory();

    const previews: PostPreviewModel[] = [];

    for await (const fileName of postList) {
      const content = await this.fileSystemService.getFileContent(fileName);

      if (!content) {
        continue;
      }

      const parsedContent = matter(content);

      previews.push(this.mapToPreviewModel(parsedContent));
    }

    return previews;
  }

  async getPostBySlug(slug: string): Promise<PostModel | null> {
    const postContent = await this.fileSystemService.getFileContent(
      `${slug}.md`
    );

    if (!postContent) {
      return null;
    }

    const parsedMarkdown = this.parseMarkdown(postContent);

    return this.mapToPostModel(parsedMarkdown);
  }

  private parseMarkdown(markdown: string) {
    return matter(markdown);
  }

  private mapToPreviewModel(
    parsedMarkdown: ReturnType<typeof matter>
  ): PostPreviewModel {
    return {
      title: parsedMarkdown.data.title,
      slug: parsedMarkdown.data.slug,
      isFeatured: parsedMarkdown.data.isFeatured,
      createdAt: new Date(parsedMarkdown.data.createdAt),
    };
  }

  private mapToPostModel(parsedMarkdown: ReturnType<typeof matter>): PostModel {
    return {
      content: parsedMarkdown.content,
      createdAt: new Date(parsedMarkdown.data.createdAt),
      title: parsedMarkdown.data.title,
      slug: parsedMarkdown.data.slug,
      isFeatured: parsedMarkdown.data.isFeatured,
    };
  }
}

export const newsService = new MarkdownPostService(
  new DefaultFileSystemService("/content/news")
);

export const pageService = new MarkdownPostService(
  new DefaultFileSystemService("/content")
);
