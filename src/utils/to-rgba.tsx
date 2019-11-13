import { typeOfColor } from "./type-of-color";

// handles #000 or #000000
// based on this function: https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-3
const hexAToRgba = (hex: string) => {
  let r: string | number = 0;
  let g: string | number = 0;
  let b: string | number = 0;
  let a: string | number = 1;

  if (hex.length === 4) {
    r = "0x" + hex[0] + hex[0];
    g = "0x" + hex[1] + hex[1];
    b = "0x" + hex[2] + hex[2];
    a = "0x" + hex[3] + hex[3];
  } else if (hex.length === 5) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
    a = "0x" + hex[4] + hex[4];
  } else if (hex.length === 8) {
    r = "0x" + hex[0] + hex[1];
    g = "0x" + hex[2] + hex[3];
    b = "0x" + hex[4] + hex[5];
    a = "0x" + hex[6] + hex[7];
  } else if (hex.length === 9) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
    a = "0x" + hex[7] + hex[8];
  }
  a = +((a as number) / 255).toFixed(3);

  return [+r, +g, +b, +a];
};

// @TODO untangle this type
const hslToRgba = (hslaarg: any) => {
  const sep: string = hslaarg.indexOf(",") > -1 ? "," : " ";

  const hsla = hslaarg
    .substr(5)
    .split(")")[0]
    .split(sep);

  if (hsla.indexOf("/") > -1) hsla.splice(3, 1);

  let h = hsla[0];
  let s = hsla[1].substr(0, hsla[1].length - 1) / 100;
  let l = hsla[2].substr(0, hsla[2].length - 1) / 100;
  let a = hsla[3];

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

  return [+r, +g, +b, +a];
};

const rgbaToRgba = (rgba: any) => {
  const sep = rgba.indexOf(",") > -1 ? "," : " ";

  rgba = rgba
    .substr(5)
    .split(")")[0]
    .split(sep);

  const r = rgba[0];
  const g = rgba[1];
  const b = rgba[2];
  const a = rgba[3];

  return [+r, +g, +b, +a];
};

const toRgba = (color: string) => {
  switch (true) {
    case typeOfColor(color) === "hex4":
    case typeOfColor(color) === "hex8":
      return hexAToRgba(color);

    case typeOfColor(color) === "rgba":
      return rgbaToRgba(color);

    case typeOfColor(color) === "hsla":
      return hslToRgba(color);

    // case typeOfColor(color) === "named":
    //   return namedToRgba(color);

    default:
      return undefined;
  }
};

export { hexAToRgba, hslToRgba, rgbaToRgba, toRgba };
