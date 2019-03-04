import { namedColors } from "./named-colors";

// taking the named colors and converting them to lowercase
// for comparison
const lowerCaseNamedColors = namedColors.map(c => c.toLowerCase());

const typeOfColor = color => {
  switch (true) {
    case color.indexOf("#") !== -1 && color.length === 4:
      return "hex3";
      break;

    case color.indexOf("#") !== -1 && color.length === 7:
      return "hex6";
      break;

    case color.indexOf("#") !== -1 && color.length === 9:
      return "hex8";
      break;

    case color.indexOf("rgba") === 0:
      return "rgba";
      break;

    case color.indexOf("rgb") === 0:
      return "rgb";
      break;

    case color.indexOf("hsla") === 0:
      return "hsla";
      break;

    case color.indexOf("hsl") === 0:
      return "hsl";
      break;

    // converting user input to lowercase so the input
    // can be "rebeccapurple" or "RebeccaPurple"
    case lowerCaseNamedColors.includes(color.toLowerCase()):
      return "named";
      break;

    default:
      return undefined;
      break;
  }
};

export { typeOfColor };
