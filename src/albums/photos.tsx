"use client";

import { ReactComponent } from "../shared/types/component";
import PhotoAlbum from "react-photo-album";
import { AssetModel } from "./service/types";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import styles from "./photos.module.scss";
import { Card } from "../posts/card";
import Image from "next/image";

interface PhotoGalleryProps {
  photos: AssetModel[];
}

export const Photos: ReactComponent<PhotoGalleryProps> = ({ photos }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  return (
    <Card additionalClasses={styles["photos-container"]}>
      <PhotoAlbum
        photos={photos}
        layout={"rows"}
        onClick={({ index }) => setPhotoIndex(index)}
        renderPhoto={(asset) => (
          <Image
            className={styles["gallery-image"]}
            src={asset.photo.src}
            alt={asset.photo.fileName}
            width={asset.layout.width}
            height={asset.layout.height}
            onClick={() => setPhotoIndex(asset.layout.index)}
            blurDataURL={asset.photo.blurUrl}
          />
        )}
      />
      <Lightbox
        open={photoIndex >= 0}
        close={() => setPhotoIndex(-1)}
        index={photoIndex}
        slides={photos}
      />
    </Card>
  );
};
