export interface ImageNode extends Record<string, unknown> {
  node: {
    type: string;
    tagName: string;
    properties?: {
      src: string;
      alt: string;
      height: number;
      width: number;
    };
  };
}
