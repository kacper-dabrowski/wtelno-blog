import {
  fakeFileSystemService,
  fakePostParams,
  getFakePostContent,
} from "./fakeFileSystemService";
import { MarkdownPostService } from "./postService";
import { when } from "jest-when";

describe("markdown post service", () => {
  let instance: MarkdownPostService;

  beforeEach(() => {
    instance = new MarkdownPostService(fakeFileSystemService);
  });

  it("should return post model, when there was an error while reading a file", async () => {
    givenFileContent();

    const postModel = await instance.getPostBySlug("some-post");

    expect(fakeFileSystemService.getFileContent).toHaveBeenCalledWith(
      "some-post.md"
    );
    expect(postModel).toEqual({
      content: "#test-content",
      createdAt: new Date("2023-04-26"),
      isFeatured: true,
      slug: "some-post",
      title: "some-post",
    });
  });

  it("should return null, if there was an error when reading a post", async () => {
    givenUnableToReadFile();

    const result = await instance.getPostBySlug("my-post.md");

    expect(result).toEqual(null);
  });

  it("should return post previews for given directory", async () => {
    givenDirectoryWithPosts();

    const result = await instance.getPostPreviews();

    expect(result).toEqual([
      {
        createdAt: new Date("2023-04-26"),
        isFeatured: true,
        slug: "some-post",
        title: "some-post",
      },
      {
        createdAt: new Date("2023-04-26"),
        isFeatured: true,
        slug: "some-post",
        title: "my-post-2",
      },
    ]);
    expect(fakeFileSystemService.getFilesInDirectory).toHaveBeenCalledWith();
  });

  function givenDirectoryWithPosts() {
    jest
      .mocked(fakeFileSystemService.getFilesInDirectory)
      .mockResolvedValue(["file1.md", "file2.md"]);

    when(fakeFileSystemService.getFileContent)
      .calledWith("file1.md")
      .mockResolvedValue(getFakePostContent())
      .calledWith("file2.md")
      .mockResolvedValue(
        getFakePostContent({ ...fakePostParams, title: "my-post-2" })
      );
  }
  function givenUnableToReadFile() {
    jest.mocked(fakeFileSystemService.getFileContent).mockResolvedValue(null);
  }

  function givenFileContent() {
    jest
      .mocked(fakeFileSystemService.getFileContent)
      .mockResolvedValue(getFakePostContent());
  }
});
