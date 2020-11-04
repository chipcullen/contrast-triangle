import { namedColors } from "./named-colors";

// taking the named colors and converting them to lowercase
// for comparison
const lowerCaseNamedColors = namedColors.map(c => c.toLowerCase());

const typeOfColor = (color: string): string | undefined => {
  switch (true) {
    // https://stackoverflow.com/a/8027444/1173898
    case /^(#)?[0-9A-F]{3}$/i.test(color):
      return "hex3";

    case /^(#)?[0-9A-F]{6}$/i.test(color):
      return "hex6";

    case /^(#)?[0-9A-F]{4}$/i.test(color):
      return "hex4";

    case /^(#)?[0-9A-F]{8}$/i.test(color):
      return "hex8";

    case color.indexOf("rgba") === 0 && color.indexOf(")") !== -1:
      return "rgba";

    case color.indexOf("rgb") === 0 && color.indexOf(")") !== -1:
      return "rgb";

    case color.indexOf("hsla") === 0 && color.indexOf(")") !== -1:
      return "hsla";

    case color.indexOf("hsl") === 0 && color.indexOf(")") !== -1:
      return "hsl";

    // converting user input to lowercase so the input
    // can be "rebeccapurple" or "RebeccaPurple"
    case lowerCaseNamedColors.includes(color.toLowerCase()):
      return "named";

    default:
      return undefined;
  }
};

const safeTypeOfColor = (color: string): string => {
  switch (true) {
    // https://stackoverflow.com/a/8027444/1173898
    case /^(#)?[0-9A-F]{3}$/i.test(color):
      return "hex3";

    case /^(#)?[0-9A-F]{6}$/i.test(color):
      return "hex6";

    case /^(#)?[0-9A-F]{4}$/i.test(color):
      return "hex4";

    case /^(#)?[0-9A-F]{8}$/i.test(color):
      return "hex8";

    case color.indexOf("rgba") === 0 && color.indexOf(")") !== -1:
      return "rgba";

    case color.indexOf("rgb") === 0 && color.indexOf(")") !== -1:
      return "rgb";

    case color.indexOf("hsla") === 0 && color.indexOf(")") !== -1:
      return "hsla";

    case color.indexOf("hsl") === 0 && color.indexOf(")") !== -1:
      return "hsl";

    // converting user input to lowercase so the input
    // can be "rebeccapurple" or "RebeccaPurple"
    case lowerCaseNamedColors.includes(color.toLowerCase()):
      return "named";

    default:
      return "none"
  }
};

const isValidColor = (color: string): boolean => {
  switch (true) {
    // https://stackoverflow.com/a/8027444/1173898
    case /^(#)?[0-9A-F]{3}$/i.test(color):
    case /^(#)?[0-9A-F]{6}$/i.test(color):
    case /^(#)?[0-9A-F]{4}$/i.test(color):
    case /^(#)?[0-9A-F]{8}$/i.test(color):
    case color.indexOf("rgba") === 0 && color.indexOf(")") !== -1:
    case color.indexOf("rgb") === 0 && color.indexOf(")") !== -1:
    case color.indexOf("hsla") === 0 && color.indexOf(")") !== -1:
    case color.indexOf("hsl") === 0 && color.indexOf(")") !== -1:
    case lowerCaseNamedColors.includes(color.toLowerCase()):
      return true;
    default:
      return false;
  }
};

export { typeOfColor, safeTypeOfColor, isValidColor };
