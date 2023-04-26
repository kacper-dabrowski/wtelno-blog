import { Post } from "@/posts/post";
import { newsService } from "@/posts/service/postService";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const post = await newsService.getPostBySlug(`${params.slug}`);

  return post ? <Post post={post} /> : <div>no post found</div>;
};

export default Page;
