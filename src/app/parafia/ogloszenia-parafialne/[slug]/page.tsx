import { Post } from "@/posts/components/post/post";
import { churchNewsService } from "@/posts/service/postService";
import { getSlugsFromService } from "../../../../shared/params/getSlugsFromService";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getSlugsFromService(churchNewsService);
}

const Page = async ({ params }: PageProps) => {
  const post = await churchNewsService.getPostBySlug(params.slug);

  return post ? <Post post={post} /> : <div>no post found</div>;
};

export default Page;
