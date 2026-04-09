import Color from "colorjs.io";

const hexRegex = /^(#)?[0-9A-F]{3}$|^(#)?[0-9A-F]{4}$|^(#)?[0-9A-F]{6}$|^(#)?[0-9A-F]{8}$/i;

const normalizeForParsing = (color: string): string => {
  if (/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{4}$|^[0-9A-Fa-f]{6}$|^[0-9A-Fa-f]{8}$/.test(color)) {
    return `#${color}`;
  }
  return color;
};

const typeOfColor = (color: string): string => {
  switch (true) {
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

    case color.indexOf("oklch") === 0 && color.indexOf(")") !== -1:
      return "oklch";

    case color.indexOf("lch") === 0 && color.indexOf(")") !== -1:
      return "lch";

    case color.indexOf("color(display-p3") === 0 && color.indexOf(")") !== -1:
      return "p3";

    default: {
      try {
        new Color(color);
        return "named";
      } catch {
        return "none";
      }
    }
  }
};

const isValidColor = (color: string): boolean => {
  try {
    new Color(normalizeForParsing(color));
    return true;
  } catch {
    return false;
  }
};

export { typeOfColor, isValidColor, hexRegex, normalizeForParsing };
