import { typeOfColor } from "./type-of-color";

// handles #000 or #000000
// based on this function: https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-3
const hexToRgb = hex => {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length == 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length == 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  return [+r, +g, +b];
};

const hslToRgb = hsl => {
  const sep = hsl.indexOf(",") > -1 ? "," : " ";

  hsl = hsl
    .substr(4)
    .split(")")[0]
    .split(sep);

  let h = hsl[0];
  let s = hsl[1].substr(0, hsl[1].length - 1) / 100;
  let l = hsl[2].substr(0, hsl[2].length - 1) / 100;

  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1) {
    h = h.substr(0, h.length - 3);
  } else if (h.indexOf("rad") > -1) {
    h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
  } else if (h.indexOf("turn") > -1) {
    h = Math.round(h.substr(0, h.length - 4) * 360);
  }

  // Keep hue fraction of 360 if ending up over
  if (h >= 360) {
    h %= 360;
  }

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [+r, +g, +b];
};

const toRgb = color => {
  switch (true) {
    case typeOfColor(color) === "hex3":
    case typeOfColor(color) === "hex6":
      return hexToRgb(color);
      break;

    case typeOfColor(color) === "hsl":
      return hslToRgb(color);
      break;

    default:
      return undefined;
      break;
  }
};

export { hexToRgb, hslToRgb, toRgb };
