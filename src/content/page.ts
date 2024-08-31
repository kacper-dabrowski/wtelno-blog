import { z } from "zod";

export const getPageData = (pageData: unknown): Page | null => {
  const result = pageSchema.safeParse(pageData);

  return result.success ? result.data : null;
};

export interface Page {
  title: string;
  createdAt: string;
  content: any;
  pathname: string;
  order: number;
}

const pageSchema = z.object({
  title: z.string(),
  createdAt: z.string(),
  content: z.instanceof(Object),
  pathname: z.string(),
  order: z.number(),
});
