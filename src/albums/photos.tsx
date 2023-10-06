"use client";

import { SecondaryHeading } from "@/posts/renderers/text";
import { Card } from "@/shared/components/card/card";
import classNames from "classnames";
import Image from "next/image";
import { FC, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./photos.module.scss";
import { AssetModel } from "./service/types";

interface PhotoGalleryProps {
  photos: AssetModel[];
  title: string;
}

export const Photos: FC<PhotoGalleryProps> = ({ photos, title }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  return (
    <Card additionalClasses={styles["photos-container"]}>
      <SecondaryHeading additionalClasses={styles["album-title"]}>
        {title}
      </SecondaryHeading>
      <PhotoAlbum
        photos={photos}
        layout={"rows"}
        onClick={({ index }) => setPhotoIndex(index)}
        renderPhoto={(asset) => (
          <Image
            className={classNames(
              asset.imageProps.className,
              styles["gallery-image"]
            )}
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
