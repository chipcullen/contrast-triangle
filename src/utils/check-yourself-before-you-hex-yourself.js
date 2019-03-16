import { typeOfColor } from "./type-of-color";

const checkYourSelfBeforeYouHexYourself = color => {
  if (typeOfColor(color).indexOf("hex") !== -1 && color.indexOf("#") !== 0) {
    return `#${color}`;
  } else {
    return color;
  }
};

export { checkYourSelfBeforeYouHexYourself };
