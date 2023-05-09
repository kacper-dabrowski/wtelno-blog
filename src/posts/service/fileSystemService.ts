import fs from "fs/promises";
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

      return fileList.map((fileName) => fileName.toString());
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
