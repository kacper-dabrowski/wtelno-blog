import { z } from "zod";

export interface PostPreview {
  title: string;
  createdAt: string;
  pathname: string;
}

export interface Post extends PostPreview {
  content: any;
}

export const getPostData = (postData: unknown): Post | null => {
  const result = postSchema.safeParse(postData);

  return result.success ? result.data : null;
};

export const postToPostPreview = (post: Post): PostPreview => {
  return {
    title: post.title,
    createdAt: post.createdAt,
    pathname: post.pathname,
  };
};

const postSchema = z.object({
  title: z.string(),
  pathname: z.string(),
  createdAt: z.string(),
  content: z.instanceof(Object),
});
