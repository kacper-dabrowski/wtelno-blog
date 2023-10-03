import { DefaultFileSystemService } from "./fileSystemService";
import { FileSystemService } from "./types";

class AdditionalContentService {
  constructor(private fileSystemService: FileSystemService) {}

  async getFromJson<T>(slug: string): Promise<T | null> {
    const contentJson = await this.fileSystemService.getFileContent(
      `${slug}.json`
    );

    if (!contentJson) {
      return null;
    }

    return JSON.parse(contentJson);
  }
}

export const additionalPageContentService = new AdditionalContentService(
  new DefaultFileSystemService("content")
);
