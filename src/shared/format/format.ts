export const stringToSentence = (text: string): string => {
  return applyTextTransformations(
    [insertSpacesInsteadOfHyphens, withCapitalFirstLetter],
    text
  );
};

const applyTextTransformations = (
  transformationArray: Array<(text: string) => string>,
  text: string
): string => {
  const textToTransform = text;

  return transformationArray.reduce((str, transform) => {
    return transform(str);
  }, textToTransform);
};

function insertSpacesInsteadOfHyphens(text: string): string {
  return text.replace(/-/g, " ");
}

function withCapitalFirstLetter(text: string) {
  return text
    .split("")
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join("");
}
