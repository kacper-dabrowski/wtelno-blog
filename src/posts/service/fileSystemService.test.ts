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

  it("should return files list from directory, if directory exists", async () => {
    givenDirectoryExists();

    const fileList = await instance.getFilesInDirectory();

    expect(fileList).toEqual(["file.md", "file2.md"]);
  });

  it("should return an empty array, if directory does not exist", async () => {
    givenDirectoryDoesNotExist();

    const fileList = await instance.getFilesInDirectory();

    expect(fileList).toEqual([]);
  });

  function givenFileWithContent() {
    jest.mocked(fs.readFile).mockResolvedValue(`#some-markdown`);
  }

  function givenFileDoesNotExist() {
    jest
      .mocked(fs.readFile)
      .mockRejectedValue(new Error("ENOENT: no such file or directory"));
  }

  function givenDirectoryExists() {
    (fs.readdir as jest.Mock).mockResolvedValue(["file.md", "file2.md"]);
  }

  function givenDirectoryDoesNotExist() {
    (fs.readdir as jest.Mock).mockRejectedValue(
      new Error("ENOENT: no such file or directory")
    );
  }
});
