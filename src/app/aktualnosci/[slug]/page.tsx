import { Post } from "@/posts/post";
import { newsService } from "@/posts/service/postService";
import { getSlugsFromService } from "../../../shared/params/getSlugsFromService";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getSlugsFromService(newsService);
}

const Page = async ({ params }: PageProps) => {
  const post = await newsService.getPostBySlug(`${params.slug}`);

  return post ? <Post post={post} /> : <div>no post found</div>;
};

export default Page;
