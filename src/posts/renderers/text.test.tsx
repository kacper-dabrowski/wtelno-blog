import { render, screen } from "@testing-library/react";
import { MainHeading, SecondaryHeading, ThirdLevelHeading } from "./text";

describe("text renderers", () => {
  it.each([
    { Component: MainHeading, expectedTagName: "h1" },
    { Component: SecondaryHeading, expectedTagName: "h2" },
    { Component: ThirdLevelHeading, expectedTagName: "h3" },
  ])(
    "should render heading with displayName for $expectedTagName",
    ({ Component, expectedTagName }) => {
      render(<Component>text</Component>);

      expect(screen.getByText("text").tagName).toEqual(
        expectedTagName.toUpperCase()
      );
      expect(Component).toHaveProperty(
        "displayName",
        `custom-${expectedTagName}`
      );
    }
  );
});
