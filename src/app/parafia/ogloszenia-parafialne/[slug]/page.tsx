import { Post } from "@/posts/components/post/post";
import { churchNewsService } from "@/posts/service/postService";
import { getSlugsFromService } from "@/shared/params/getSlugsFromService";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getSlugsFromService(churchNewsService);
}

const Page = async ({ params }: PageProps) => {
  const post = await churchNewsService.getPostBySlug(
    decodeURIComponent(params.slug)
  );

  return post ? <Post post={post} /> : notFound();
};

export default Page;
