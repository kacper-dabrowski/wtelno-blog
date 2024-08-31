import {
  getAllTabs,
  getPageBySlug,
  getPostPreviews,
  getPosts,
} from "./contentful";

describe("contentful integration", () => {
  it("should get page content by slug", async () => {
    expect(await getPageBySlug("regulamin-cmentarza")).toMatchSnapshot();
  });

  it("should get all tabs", async () => {
    expect(await getAllTabs()).toMatchSnapshot();
  });

  it("should return posts", async () => {
    expect(await getPosts()).toEqual("");
  });

  it("should return post previews", async () => {
    expect(await getPostPreviews()).toMatchSnapshot();
  });
});
