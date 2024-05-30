import * as fs from "fs/promises";
import path from "path";
import { FileSystemService } from "./types";

export class DefaultFileSystemService implements FileSystemService {
  constructor(private fileDirectoryPath: string) {}

  async getFileContent(fileName: string): Promise<string | null> {
    try {
      const fileContentBuffer = await fs.readFile(this.getFilePath(fileName));

      return fileContentBuffer.toString();
    } catch (error) {
      return null;
    }
  }

  async getFilesInDirectory(): Promise<string[]> {
    try {
      const fileList = await fs.readdir(this.getDirectoryPath());
      const excludedFileNames =
        process.env?.FILE_READER_EXCLUDED_WORDS?.split(",");
      const allFilesInDirectory: string[] = [];

      return fileList.reduce((acc, currentValue) => {
        if (!Array.isArray(excludedFileNames)) {
          return [...acc, currentValue];
        }

        const hasExcludedKeyword = excludedFileNames.some((excluded) =>
          currentValue.includes(excluded)
        );

        if (hasExcludedKeyword) {
          return acc;
        }

        return [...acc, currentValue];
      }, allFilesInDirectory);
    } catch (error) {
      return [];
    }
  }

  private getFilePath(fileName: string) {
    return path.join(this.getDirectoryPath(), fileName);
  }

  private getDirectoryPath() {
    return path.join(this.fileDirectoryPath);
  }
}
