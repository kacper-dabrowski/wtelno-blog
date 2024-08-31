import { Post } from "@/posts/components/post/post";
import { notFound } from "next/navigation";
import { getAllTabs, getPageBySlug } from "../../content/contentful";

interface PageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const tabs = await getAllTabs();

  return tabs.filter(Boolean).map((tab) => ({ slug: tab?.pathname }));
};

const Page = async ({ params }: PageProps) => {
  const post = await getPageBySlug(decodeURIComponent(params.slug));

  return post ? <Post post={post} /> : notFound();
};

export default Page;
