import { Photos } from "../../../albums/photos";
import { defaultCloudinaryPhotoService } from "../../../albums/service/cloudinaryPhotoService";

interface PageParams {
  params: { singleAlbum: string };
}
export const revalidate = 3600;
export default async function Page({ params }: PageParams) {
  const photos = await defaultCloudinaryPhotoService.getPhotosOfAlbum(
    params.singleAlbum
  );
  return <Photos photos={photos} />;
}
