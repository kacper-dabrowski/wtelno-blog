import { cloudinaryConfig } from "@/shared/config/cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { AssetModel, CloudinaryDto, PhotoService } from "./types";
import { CustomCacheProvider } from "../../shared/cache/cache";
import { DefaultCacheProvider } from "../../shared/cache/provider";
import { InMemoryCache } from "../../shared/cache/inMemory";

export interface CloudinaryClient {
  search: typeof cloudinary.search;
  config: typeof cloudinary.config;
}

export class CloudinaryPhotoService implements PhotoService {
  constructor(
    private cloudinaryClient: typeof cloudinary,
    private cacheProvider: CustomCacheProvider
  ) {
    this.cloudinaryClient.config(cloudinaryConfig);
  }

  getAllAlbums() {
    return this.cacheProvider.get(
      "all_albums",
      () => this.fetchAllAlbums(),
      1800
    );
  }

  private async fetchAllAlbums(): Promise<string[]> {
    const response = await this.cloudinaryClient.api.resources();

    if (!response.resources) {
      return [];
    }

    const folders = (response.resources as Array<{ folder: string }>).reduce<
      Array<string>
    >((allFolders, currentAsset) => {
      if (allFolders.includes(currentAsset.folder) || !currentAsset.folder) {
        return allFolders;
      }

      allFolders.push(currentAsset.folder);

      return allFolders;
    }, []);

    return folders;
  }

  async getAlbumThumbnail(albumName: string): Promise<AssetModel[]> {
    const result = await this.cacheProvider.get(
      `${albumName}-1`,
      () => this.queryPhotosOfAlbum(albumName, 1),
      3600
    );

    return result ?? [];
  }

  async getPhotosOfAlbum(albumName: string): Promise<AssetModel[]> {
    const result = await this.cacheProvider.get(
      `${albumName}-50`,
      () => this.queryPhotosOfAlbum(albumName, 50),
      3600
    );

    return result ?? [];
  }

  private async queryPhotosOfAlbum(
    albumName: string,
    maxResults: number
  ): Promise<AssetModel[]> {
    try {
      const album: CloudinaryDto = await this.cloudinaryClient.search
        .expression(`folder:${albumName}/*`)
        .sort_by("public_id", "desc")
        .max_results(maxResults)
        .execute();

      return await Promise.all(
        album.resources.map(async (resource) => ({
          blurUrl: await this.getBlurredPhotoUrl(
            resource.public_id,
            resource.format
          ),
          src: resource.secure_url,
          width: resource.width,
          height: resource.height,
          fileName: resource.filename,
          format: resource.format,
          path: resource.public_id,
        }))
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return [];
    }
  }

  private async getBlurredPhotoUrl(path: string, format: string) {
    try {
      const response = await fetch(
        `https://res.cloudinary.com/${cloudinaryConfig.cloud_name}/image/upload/w_2100,e_blur:5000,q_auto,f_auto/${path}.${format}`
      );

      const encodedImage = Buffer.from(await response.arrayBuffer()).toString(
        "base64"
      );

      return `data:image/jpeg;base64,${encodedImage}`;
    } catch {
      return "";
    }
  }
}

export const defaultCloudinaryPhotoService = new CloudinaryPhotoService(
  cloudinary,
  new DefaultCacheProvider(new InMemoryCache())
);

export const fakeAssetsDto: CloudinaryDto = {
  resources: [
    {
      filename: "IMG_4502_1_n96rjt",
      public_id: "test-album/IMG_4502_1_n96rjt",
      format: "jpg",
      width: 1297,
      height: 973,
      secure_url:
        "https://res.cloudinary.com/dhpegk3fz/image/upload/v1682944499/test-album/IMG_4502_1_n96rjt.jpg",
    },
  ],
};
