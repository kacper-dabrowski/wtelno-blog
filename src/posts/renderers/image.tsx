import Image from "next/image";
import { ImageNode } from "../types";

export const renderImage = (imageNode: any, classes?: string) => {
  if (!imageNode) {
    return null;
  }

  const {
    node: { properties },
  } = imageNode as ImageNode;

  return (
    <Image
      width={properties!.width}
      height={properties!.height}
      src={properties!.src}
      alt={properties!.alt}
      className={classes}
    />
  );
};
