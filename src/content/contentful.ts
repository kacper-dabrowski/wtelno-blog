import { Entry, EntrySkeletonType, createClient } from "contentful";
import { Page, getPageData } from "./page";
import { Tab, getTabData } from "./tab";
import { Post, getPostData, postToPostPreview } from "./post";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  const entries = await client.getEntries({
    content_type: "page",
    "fields.pathname": slug,
  });

  return mapEntryToPage(entries.items[0]);
};

export const getAllTabs = async (): Promise<Tab[]> => {
  const entries = await client.getEntries({
    content_type: "page",
  });
  const newsTab: Tab = {
    title: "Aktualności",
    pathname: "aktualnosci",
    hasSubpages: true,
    order: 1,
  };
  const pagesTabs = entries.items
    .map((item) => getTabData(item.fields))
    .filter(Boolean) as Tab[];

  return [newsTab, ...pagesTabs].sort(sortTabsByOrder);
};

export const getPostBySlug = async (slug: string) => {
  const entries = await client.getEntries({
    content_type: "news",
    "fields.pathname": slug,
  });

  return getPostData(entries.items[0].fields);
};
export const getPosts = async (): Promise<Post[]> => {
  const entries = await client.getEntries({ content_type: "news" });

  return entries.items
    .map((item) => getPostData(item.fields))
    .filter(Boolean) as Post[];
};

export const getPostPreviews = async () => {
  const posts = await getPosts();

  return posts.map(postToPostPreview);
};

function mapEntryToPage(
  entry: Entry<EntrySkeletonType, undefined, string>
): Page | null {
  return getPageData(entry.fields);
}

function sortTabsByOrder(a: Tab, b: Tab) {
  return a.order - b.order;
}
