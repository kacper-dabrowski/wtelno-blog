import { ParagraphText } from "@/posts/renderers/text";
import { PrimaryButton } from "@/shared/components/button/button";
import { Card } from "@/shared/components/card/card";
import Link from "next/link";
import { PostPreview } from "../../../../content/post";
import styles from "./singlePostPreview.module.scss";

interface PostCardProps {
  post: PostPreview;
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
        {new Intl.DateTimeFormat("pl-PL").format(new Date(post.createdAt))}
      </span>
    </ParagraphText>
    <div className={styles.buttonContainer}>
      <Link href={`${baseUrl}/${post.pathname}`}>
        <PrimaryButton>Przeczytaj całość</PrimaryButton>
      </Link>
    </div>
  </Card>
);
