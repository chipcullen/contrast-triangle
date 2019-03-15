import { typeOfColor } from "./type-of-color";

// normalizes non-alpha hex values
// handles 000, #000, 000000 or #000000
const hexToHex = hex => {
  let result = "";

  // fff
  if (hex.length === 3) {
    result = `#${hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]}`;
  } else if (hex.length === 4) {
    // #fff
    result = `#${hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]}`;
  } else if (hex.length === 6) {
    // ffffff
    result = `#${hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5]}`;
  } else if (hex.length === 7) {
    // #ffffff
    result = `#${hex[1] + hex[2] + hex[3] + hex[4] + hex[5] + hex[6]}`;
  }

  return result;
};

// based on https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-19
const hslToHex = hsl => {
  const sep = hsl.indexOf(",") > -1 ? "," : " ";

  hsl = hsl
    .substr(4)
    .split(")")[0]
    .split(sep);

  let h = hsl[0];
  let s = hsl[1].substr(0, hsl[1].length - 1) / 100 || 0;
  let l = hsl[2].substr(0, hsl[2].length - 1) / 100 || 0;

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
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
};

// https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-1
const rgbToHex = rgb => {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";

  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb
    .substr(4)
    .split(")")[0]
    .split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
};

const rgbArrayToHex = rgb => {
  let r = (+Math.round(rgb[0])).toString(16),
    g = (+Math.round(rgb[1])).toString(16),
    b = (+Math.round(rgb[2])).toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
};

const namedToHex = name => {
  // Create fake div
  let fakeDiv = document.createElement("div");
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  // Get color of div
  let cs = window.getComputedStyle(fakeDiv);
  let pv = cs.getPropertyValue("color");

  // Remove div after obtaining desired color value
  document.body.removeChild(fakeDiv);
  return rgbToHex(pv);
};

const toHex = color => {
  switch (true) {
    case typeOfColor(color) === "hex3":
    case typeOfColor(color) === "hex6":
      return hexToHex(color);

    case typeOfColor(color) === "rgb":
      return rgbToHex(color);

    case typeOfColor(color) === "hsl":
      return hslToHex(color);

    case typeOfColor(color) === "named":
      return namedToHex(color);

    default:
      return undefined;
  }
};

export { hexToHex, hslToHex, rgbToHex, rgbArrayToHex, namedToHex, toHex };
