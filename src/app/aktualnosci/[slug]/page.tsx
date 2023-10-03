import { Post } from "@/posts/components/post/post";
import { newsService } from "@/posts/service/postService";
import { getSlugsFromService } from "@/shared/params/getSlugsFromService";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getSlugsFromService(newsService);
}

const Page = async ({ params }: PageProps) => {
  const post = await newsService.getPostBySlug(decodeURIComponent(params.slug));

  return post ? <Post post={post} /> : notFound();
};

export default Page;
