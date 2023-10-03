import { Card } from "@/shared/components/card/card";
import { SecondaryHeading } from "@/posts/renderers/text";
import styles from "./singleAlbum.module.scss";
import { AlbumSkeleton } from "./skeleton";

const placeholderArray = new Array(9).fill(null);

export const SingleAlbumLoader = () => {
  return (
    <Card additionalClasses={styles.card}>
      <SecondaryHeading
        additionalClasses={styles.titlePlaceholder}
      ></SecondaryHeading>
      <div className={styles.container}>
        {placeholderArray.map((_, index) => (
          <AlbumSkeleton key={index} />
        ))}
      </div>
    </Card>
  );
};
