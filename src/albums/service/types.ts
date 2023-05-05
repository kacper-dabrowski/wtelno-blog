export interface PhotoService {
  getPhotosOfAlbum(albumName: string): Promise<AssetModel[]>;
}

export interface CloudinaryDto {
  resources: AssetDto[];
}

export interface AssetDto {
  public_id: string;
  format: string;
  secure_url: string;
  width: number;
  height: number;
  filename: string;
}

export interface AssetModel {
  blurUrl: string;
  path: string;
  format: string;
  fileName: string;
  src: string;
  width: number;
  height: number;
}
