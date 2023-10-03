import React from "react";

interface NoProps {}

export type ReactComponent<T = NoProps> = (props: T) => JSX.Element;
export type ReactComponentWithChildren<T = NoProps> = ReactComponent<
  T & React.PropsWithChildren<T>
>;
