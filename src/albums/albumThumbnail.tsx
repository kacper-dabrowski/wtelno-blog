import Image from "next/image";
import { ReactComponent } from "@/shared/types/component";
import styles from "./thumbnail.module.scss";
import Link from "next/link";
import { stringToSentence } from "@/shared/format/format";

interface ThumbnailProps {
  title: string;
  blurUrl: string;
  fileName: string;
}

export const AlbumThumbnail: ReactComponent<ThumbnailProps> = ({
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
