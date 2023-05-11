import { PostPreviewModel } from "@/posts/service/types";
import Link from "next/link";
import styles from "./singlePostPreview.module.scss";
import { Card } from "./card";
import { ParagraphText } from "./text/text";
import { ReadWholePostButton } from "./button";

interface PostCardProps {
  post: PostPreviewModel;
}

export const SinglePostPreview = ({ post }: PostCardProps) => (
  <Card additionalClasses={styles.postPreviewContainer}>
    <ParagraphText additionalClasses={styles.postPreviewTitle}>
      {post.title}
    </ParagraphText>
    <ParagraphText>
      Data publikacji:{" "}
      <span className={styles.date}>
        {new Intl.DateTimeFormat("pl-PL").format(post.createdAt)}
      </span>
    </ParagraphText>
    <div className={styles.buttonContainer}>
      <Link href={`/aktualnosci/${post.slug}`}>
        <ReadWholePostButton>Przeczytaj całość</ReadWholePostButton>
      </Link>
    </div>
  </Card>
);
