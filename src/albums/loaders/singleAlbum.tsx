import { Card } from "../../posts/card";
import { SecondaryHeading } from "../../posts/text/text";
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
