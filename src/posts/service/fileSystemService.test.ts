import * as fs from "fs/promises";
import { overrideEnvs, restoreEnvs } from "../../shared/test/env";
import { DefaultFileSystemService } from "./fileSystemService";

jest.mock("fs/promises");

describe("fileSystemService", () => {
  let instance: DefaultFileSystemService;
  const baseDirectoryPath = "/content/news";
  const readDirSpy = jest.spyOn(fs, "readdir");
  const readFileSpy = jest.spyOn(fs, "readFile");

  beforeEach(() => {
    instance = new DefaultFileSystemService("/content/news");
  });

  afterEach(() => {
    restoreEnvs();
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

  it("should omit files with defined excluded words", async () => {
    overrideEnvs({ FILE_READER_EXCLUDED_WORDS: "example,test" });

    givenDirectoryExists(["file1.md", "example.md", "test.md"]);

    const fileList = await instance.getFilesInDirectory();

    expect(fileList).toEqual(["file1.md"]);
  });

  it("should return an empty array, if directory does not exist", async () => {
    givenDirectoryDoesNotExist();

    const fileList = await instance.getFilesInDirectory();

    expect(fileList).toEqual([]);
  });

  function givenFileWithContent() {
    readFileSpy.mockResolvedValue(`#some-markdown`);
  }

  function givenFileDoesNotExist() {
    readFileSpy.mockRejectedValue(
      new Error("ENOENT: no such file or directory")
    );
  }

  function givenDirectoryExists(files = ["file.md", "file2.md"]) {
    readDirSpy.mockResolvedValue(files as any);
  }

  function givenDirectoryDoesNotExist() {
    readDirSpy.mockRejectedValue(
      new Error("ENOENT: no such file or directory")
    );
  }
});
