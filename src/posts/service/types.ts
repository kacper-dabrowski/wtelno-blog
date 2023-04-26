export interface PostService {
  getPostBySlug(fileName: string): Promise<PostModel | null>;
}

export interface FileSystemService {
  getFileContent(fileName: string): Promise<string | null>;
  getFilesInDirectory(): Promise<string[]>;
}

export interface PostPreviewModel {
  title: string;
  slug: string;
  isFeatured: boolean;
  createdAt: Date;
}

export interface PostModel extends PostPreviewModel {
  content: string;
}
