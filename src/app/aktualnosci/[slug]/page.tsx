import { Post } from "@/posts/components/post/post";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostPreviews } from "../../../content/contentful";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPostPreviews();

  return posts.map((post) => ({ slug: post.pathname }));
}

const Page = async ({ params }: PageProps) => {
  const post = await getPostBySlug(decodeURIComponent(params.slug));

  return post ? <Post post={post} /> : notFound();
};

export default Page;
