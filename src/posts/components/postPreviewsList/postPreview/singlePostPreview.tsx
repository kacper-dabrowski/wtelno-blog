import { PostPreviewModel } from "@/posts/service/types";
import Link from "next/link";
import styles from "./singlePostPreview.module.scss";
import { Card } from "../../../../shared/components/card/card";
import { ParagraphText } from "../../../renderers/text";
import { ReadWholePostButton } from "../../../../shared/components/button/button";

interface PostCardProps {
  post: PostPreviewModel;
  baseUrl: string;
}

export const SinglePostPreview = ({ post, baseUrl }: PostCardProps) => (
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
      <Link href={`${baseUrl}/${post.slug}`}>
        <ReadWholePostButton>Przeczytaj całość</ReadWholePostButton>
      </Link>
    </div>
  </Card>
);
