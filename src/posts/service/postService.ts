import matter from "gray-matter";
import { FileSystemService, PostModel, PostService } from "./types";

export class MarkdownPostService implements PostService {
  constructor(private fileSystemService: FileSystemService) {}

  async getPostByName(fileName: string): Promise<PostModel | null> {
    const postContent = await this.fileSystemService.getFileContent(fileName);

    if (!postContent) {
      return null;
    }

    const parsedMarkdown = this.parseMarkdown(postContent);

    return this.mapToModel(parsedMarkdown);
  }

  private parseMarkdown(markdown: string) {
    return matter(markdown);
  }

  private mapToModel(parsedMarkdown: ReturnType<typeof matter>): PostModel {
    return {
      content: parsedMarkdown.content,
      createdAt: parsedMarkdown.data.createdAt,
      title: parsedMarkdown.data.title,
      slug: parsedMarkdown.data.slug,
      isFeatured: parsedMarkdown.data.isFeatured,
    };
  }
}
