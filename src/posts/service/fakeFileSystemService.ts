import { FileSystemService } from "./types";

export const fakeFileSystemService: FileSystemService = {
  getFileContent: jest.fn(),
  getFilesInDirectory: jest.fn(),
};

export const fakePostParams = {
  title: "some-post",
  createdAt: "2023-04-26",
  isFeatured: true,
  slug: "some-post",
};

export const getFakePostContent = ({
  title,
  createdAt,
  isFeatured,
  slug,
}: {
  title: string;
  createdAt: string;
  isFeatured: boolean;
  slug: string;
} = fakePostParams) => {
  return `---\ntitle: '${title}'\ncreatedAt: '${createdAt}'\nisFeatured: ${isFeatured}\nslug: '${slug}'\n---\n#test-content`;
};
