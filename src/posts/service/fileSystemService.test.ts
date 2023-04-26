import { DefaultFileSystemService } from "./fileSystemService";
import fs from "fs/promises";

jest.mock("fs/promises");

describe("fileSystemService", () => {
  let instance: DefaultFileSystemService;
  const baseDirectoryPath = "/content/news";

  beforeEach(() => {
    instance = new DefaultFileSystemService("/content/news");
  });

  it("should get file content for given directory and filename", async () => {
    givenFileWithContent();

    const content = await instance.getFileContent("test.md");

    expect(content).toEqual("#some-markdown");
    expect(fs.readFile).toHaveBeenCalledWith(
      expect.stringContaining(baseDirectoryPath)
    );
  });

  it("should return null, when error occurred while reading the file", async () => {
    givenFileDoesNotExist();

    const content = await instance.getFileContent("test.md");

    expect(content).toEqual(null);
  });

  function givenFileWithContent() {
    jest.mocked(fs.readFile).mockResolvedValue(`#some-markdown`);
  }

  function givenFileDoesNotExist() {
    jest
      .mocked(fs.readFile)
      .mockRejectedValue(
        new Error(
          "ENOENT: no such file or directory, open '/Users/kacperdabrowski/Documents/projects/wtelno-info-blog/content/news/test.md'"
        )
      );
  }
});
