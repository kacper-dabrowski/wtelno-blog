import { Post } from "@/posts/post";
import { pageService } from "@/posts/service/postService";
import { getSlugsFromService } from "../../shared/params/getSlugsFromService";

interface PageProps {
  params: {
    singlePage: string;
  };
}

export async function generateStaticParams() {
  return getSlugsFromService(pageService);
}

const Page = async ({ params }: PageProps) => {
  const post = await pageService.getPostBySlug(params.singlePage);

  return post ? <Post post={post} /> : <div>no post found</div>;
};

export default Page;
