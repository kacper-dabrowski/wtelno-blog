export interface PostService {
  getPostByName(fileName: string): Promise<PostModel | null>;
}

export interface FileSystemService {
  getFileContent(fileName: string): Promise<string | null>;
}

export interface PostModel {
  title: string;
  slug: string;
  isFeatured: boolean;
  createdAt: Date;
  content: string;
}
