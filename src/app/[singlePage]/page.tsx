import { Post } from "@/posts/post";
import { pageService } from "@/posts/service/postService";

interface PageProps {
  params: {
    singlePage: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const post = await pageService.getPostBySlug(params.singlePage);

  return post ? <Post post={post} /> : <div>no post found</div>;
};

export default Page;
