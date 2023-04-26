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

  private getFilePath(fileName: string) {
    return path.join(process.cwd(), this.fileDirectoryPath, fileName);
  }
}
