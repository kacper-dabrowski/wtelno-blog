import { Post } from "@/posts/post";
import { pageService } from "@/posts/service/postService";
import { getSlugsFromService } from "../../shared/params/getSlugsFromService";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getSlugsFromService(pageService);
}

const Page = async ({ params }: PageProps) => {
  const post = await pageService.getPostBySlug(params.slug);

  return post ? <Post post={post} /> : <div>no post found</div>;
};

export default Page;
