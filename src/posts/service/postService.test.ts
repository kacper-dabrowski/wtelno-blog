import {
  fakePostContent,
  fakeFileSystemService,
} from "./fakeFileSystemService";
import { MarkdownPostService } from "./postService";

describe("markdown post service", () => {
  let instance: MarkdownPostService;

  beforeEach(() => {
    instance = new MarkdownPostService(fakeFileSystemService);
  });

  it("should return post model, when there was an error while reading a file", async () => {
    givenFileContent();

    const postModel = await instance.getPostByName("my-post.md");

    expect(fakeFileSystemService.getFileContent).toHaveBeenCalledWith(
      "my-post.md"
    );
    expect(postModel).toEqual({
      content: "#test-content",
      createdAt: "2023-04-26",
      isFeatured: true,
      slug: "my-first-post",
      title: "Getting Started with NextJS",
    });
  });

  it("should return null, if there was an error when reading a post", async () => {
    givenUnableToReadFile();

    const result = await instance.getPostByName("my-post.md");

    expect(result).toEqual(null);
  });

  function givenUnableToReadFile() {
    jest.mocked(fakeFileSystemService.getFileContent).mockResolvedValue(null);
  }

  function givenFileContent() {
    jest
      .mocked(fakeFileSystemService.getFileContent)
      .mockResolvedValue(fakePostContent);
  }
});
