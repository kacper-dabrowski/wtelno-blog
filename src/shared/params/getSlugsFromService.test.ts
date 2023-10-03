import {
  fakeFileSystemService,
  getFakePostContent,
} from "@/posts/service/fakeFileSystemService";
import { MarkdownPostService } from "@/posts/service/postService";
import { getSlugsFromService } from "./getSlugsFromService";

describe("getSlugsFromService", () => {
  let service: MarkdownPostService;

  beforeEach(() => {
    service = new MarkdownPostService(fakeFileSystemService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return slugs, when service returns some posts to preview", async () => {
    givenPostsReturned();

    expect(await getSlugsFromService(service)).toEqual([{ slug: "some-post" }]);
  });

  it("should return empty array, when service returns no posts", async () => {
    givenNoPostsReturned();

    expect(await getSlugsFromService(service)).toEqual([]);
  });

  function givenPostsReturned() {
    jest
      .mocked(fakeFileSystemService.getFilesInDirectory)
      .mockResolvedValue(["my-post.md"]);
    jest
      .mocked(fakeFileSystemService.getFileContent)
      .mockResolvedValue(getFakePostContent());
  }

  function givenNoPostsReturned() {
    jest
      .mocked(fakeFileSystemService.getFilesInDirectory)
      .mockResolvedValue([]);
  }
});
