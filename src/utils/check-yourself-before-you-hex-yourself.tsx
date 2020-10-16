import { typeOfColor } from "./type-of-color";

// this just normalizes a hex color by making sure to insert
// an octothorp (#) if the color is a valid hex, but lacks
// the octothorp. this is needed for passing hex values to
// the color inputs, which need a # for the value passed to them
const checkYourSelfBeforeYouHexYourself = (color: string): string => {
  if (typeOfColor(color)?.indexOf("hex") !== -1 && color.indexOf("#") !== 0) {
    return `#${color}`;
  } else {
    return color;
  }
};

export { checkYourSelfBeforeYouHexYourself };
