import { FileSystemService } from "./types";

export const fakeFileSystemService: FileSystemService = {
  getFileContent: jest.fn(),
};

export const fakePostContent =
  "---\ntitle: 'Getting Started with NextJS'\ncreatedAt: '2023-04-26'\nisFeatured: true\nslug: 'my-first-post'\n---\n#test-content";
