import { CloudinaryPhotoService } from "@/albums/service/cloudinaryPhotoService";
import { v2 as cloudinary } from "cloudinary";
import Image from "next/image";

export default async function Page() {
  const photos = await new CloudinaryPhotoService(cloudinary).getPhotosOfAlbum(
    "test-album"
  );

  return photos.map((photo) => (
    <Image
      width={photo.width}
      height={photo.height}
      src={photo.url}
      key={photo.url}
      alt={photo.fileName}
      placeholder="blur"
      blurDataURL={photo.blurUrl}
    />
  ));
}
