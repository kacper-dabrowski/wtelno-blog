import { stringToSentence } from "@/shared/format/format";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./thumbnail.module.scss";

interface ThumbnailProps {
  title: string;
  blurUrl: string;
  fileName: string;
}

export const AlbumThumbnail: FC<ThumbnailProps> = ({
  blurUrl,
  fileName,
  title,
}) => {
  const formattedTitle = stringToSentence(title);

  return (
    <Link href={`/galeria/${title}`}>
      <div className={styles["thumbnail-container"]}>
        <Image
          className={styles["thumbnail-image"]}
          width={640}
          height={320}
          src={blurUrl}
          blurDataURL={blurUrl}
          alt={fileName}
        />
        <p className={styles["thumbnail-title"]}>{formattedTitle}</p>
      </div>
    </Link>
  );
};
