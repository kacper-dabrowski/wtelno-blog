import { Photos } from "../../../albums/photos";
import { defaultCloudinaryPhotoService } from "../../../albums/service/cloudinaryPhotoService";
import { stringToSentence } from "../../../shared/format/format";

interface PageParams {
  params: { singleAlbum: string };
}

export const revalidate = 3600;
export default async function Page({ params }: PageParams) {
  const photos = await defaultCloudinaryPhotoService.getPhotosOfAlbum(
    params.singleAlbum
  );
  return (
    <Photos photos={photos} title={stringToSentence(params.singleAlbum)} />
  );
}
