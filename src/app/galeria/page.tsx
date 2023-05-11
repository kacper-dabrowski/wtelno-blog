import { defaultCloudinaryPhotoService } from "@/albums/service/cloudinaryPhotoService";
import { AlbumThumbnail } from "../../albums/albumThumbnail";
import { ThumbnailsList } from "../../albums/thumbnailsList";

export const revalidate = 3600;

export default async function Page() {
  const albums = await defaultCloudinaryPhotoService.getAllAlbums();

  if (!albums || !albums.length) {
    return "no photos found";
  }

  const thumbnails = await Promise.all(
    albums.map((album) =>
      defaultCloudinaryPhotoService.getAlbumThumbnail(album)
    )
  );

  return (
    <ThumbnailsList>
      {thumbnails.map(([photo], index) => (
        <AlbumThumbnail
          key={photo.src}
          title={albums[index]}
          blurUrl={photo.blurUrl}
          fileName={photo.fileName}
        />
      ))}
    </ThumbnailsList>
  );
}
