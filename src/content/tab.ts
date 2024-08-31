import { z } from "zod";

export interface Tab {
  pathname: string;
  title: string;
  hasSubpages: boolean;
  order: number;
}

const tabSchema = z.object({
  pathname: z.string(),
  title: z.string(),
  hasSubpages: z.boolean(),
  order: z.number(),
});

export const getTabData = (tabData: unknown): Tab | null => {
  const result = tabSchema.safeParse(tabData);

  return result.success ? result.data : null;
};
