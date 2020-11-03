import { typeOfColor } from "./type-of-color";

// handles #000 or #000000
// based on this function: https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-3
const hexToRgb = (hex: string): Array<number> => {
  let r: number = 0;
  let g: number = 0;
  let b: number = 0;

  // 3 digits - fff
  if (hex.length === 3) {
    r = parseInt("0x" + hex[0] + hex[0]);
    g = parseInt("0x" + hex[1] + hex[1]);
    b = parseInt("0x" + hex[2] + hex[2]);
  } else if (hex.length === 4) {
    // #fff
    r = parseInt("0x" + hex[1] + hex[1]);
    g = parseInt("0x" + hex[2] + hex[2]);
    b = parseInt("0x" + hex[3] + hex[3]);
  } else if (hex.length === 6) {
    // ffffff
    r = parseInt("0x" + hex[0] + hex[1]);
    g = parseInt("0x" + hex[2] + hex[3]);
    b = parseInt("0x" + hex[4] + hex[5]);
  } else if (hex.length === 7) {
    // #ffffff
    r = parseInt("0x" + hex[1] + hex[2]);
    g = parseInt("0x" + hex[3] + hex[4]);
    b = parseInt("0x" + hex[5] + hex[6]);
  }

  return [+r, +g, +b];
};

const hslToRgb = (hsl: string): Array<number> => {
  const sep = hsl.indexOf(",") > -1 ? "," : " ";

  let hslArray: Array<string> = hsl
    .substr(4)
    .split(")")[0]
    .split(sep);

  let h = hslArray[0]; // leaving this a string for now
  let s = parseInt(hslArray[1].substr(0, hslArray[1].length - 1)) / 100 || 0;
  let l = parseInt(hslArray[2].substr(0, hslArray[2].length - 1)) / 100 || 0;

  let hNum: number;

  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1) {
    hNum = parseInt(h.substr(0, h.length - 3));
  } else if (h.indexOf("rad") > -1) {
    hNum = Math.round(parseInt(h.substr(0, h.length - 3)) * (180 / Math.PI));
  } else if (h.indexOf("turn") > -1) {
    hNum = Math.round(parseInt(h.substr(0, h.length - 4)) * 360);
  } else {
    hNum = parseInt(h);
  }

  // Keep hue fraction of 360 if ending up over
  if (hNum >= 360) {
    hNum %= 360;
  }

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((hNum / 60) % 2) - 1));
  let m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (0 <= hNum && hNum < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= hNum && hNum < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= hNum && hNum < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= hNum && hNum < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= hNum && hNum < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= hNum && hNum < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [+r, +g, +b];
};

const rgbToRgb = (rgb: string): Array<number> => {
  const sep = rgb.indexOf(",") > -1 ? "," : " ";

  const rgbArray = rgb
    .substr(4)
    .split(")")[0]
    .split(sep);

  const r = rgbArray[0];
  const g = rgbArray[1];
  const b = rgbArray[2];

  return [+r, +g, +b];
};

const namedToRgb = (name: string) => {
  // Create fake div
  let fakeDiv = document.createElement("div");
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  // Get color of div
  let cs = window.getComputedStyle(fakeDiv);
  let pv = cs.getPropertyValue("color");

  // Remove div after obtaining desired color value
  document.body.removeChild(fakeDiv);
  return rgbToRgb(pv);
};

const toRgb = (color: string): Array<number> | undefined => {
  switch (true) {
    case typeOfColor(color) === "hex3":
    case typeOfColor(color) === "hex6":
      return hexToRgb(color);

    case typeOfColor(color) === "rgb":
      return rgbToRgb(color);

    case typeOfColor(color) === "hsl":
      return hslToRgb(color);

    case typeOfColor(color) === "named":
      return namedToRgb(color);

    default:
      return undefined;
  }
};

export { hexToRgb, hslToRgb, rgbToRgb, namedToRgb, toRgb };
