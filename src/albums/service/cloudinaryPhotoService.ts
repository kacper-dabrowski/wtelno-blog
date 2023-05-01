import { cloudinaryConfig } from "@/shared/config/cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { AssetModel, CloudinaryDto, PhotoService } from "./types";

export interface CloudinaryClient {
  search: typeof cloudinary.search;
  config: typeof cloudinary.config;
}

export class CloudinaryPhotoService implements PhotoService {
  constructor(private cloudinaryClient: CloudinaryClient) {
    this.cloudinaryClient.config(cloudinaryConfig);
  }

  async getPhotosOfAlbum(albumName: string): Promise<AssetModel[]> {
    const album: CloudinaryDto = await this.cloudinaryClient.search
      .expression(`folder:${albumName}/*`)
      .sort_by("public_id", "desc")
      .max_results(50)
      .execute();

    const albumPromises = album.resources.map(async (resource) => ({
      blurUrl: await this.getBlurredPhotoUrl(
        resource.public_id,
        resource.format
      ),
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      fileName: resource.filename,
      format: resource.format,
      path: resource.public_id,
    }));

    return Promise.all(albumPromises);
  }

  private async getBlurredPhotoUrl(path: string, format: string) {
    const response = await fetch(
      `https://res.cloudinary.com/${cloudinaryConfig.cloud_name}/image/upload/w_2100,e_blur:5000,q_auto,f_auto/${path}.${format}`
    );

    const encodedImage = Buffer.from(await response.arrayBuffer()).toString(
      "base64"
    );

    return `data:image/jpeg;base64,${encodedImage}`;
  }
}

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
