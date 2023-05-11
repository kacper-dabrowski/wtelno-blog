import { stringToSentence } from "./format";

describe("formatting text", () => {
  it("should capitalize first letter, if it contains no hyphens", () => {
    expect(stringToSentence("some text")).toEqual("Some text");
  });

  it("should replace hyphens with spaces", () => {
    expect(stringToSentence("some-text")).toEqual("Some text");
  });

  it("should support mutliple spaces", () => {
    expect(stringToSentence("some-text-longer")).toEqual("Some text longer");
  });
});
