import { toRgb } from "./to-rgb";
import { toRgba } from "./to-rgba";
import { rgbArrayToHex, toHex } from "./to-hex";
import { typeOfColor } from "./type-of-color";
import { calculateOverlay } from "./calculate-overlay";
import { ASSUMED_BACKGROUND_COLOR } from "../Constants";

const colorTranslate = (keyName, color, bgColorRgb) => {
  // if no real color value, return undefined
  if (!typeOfColor(color)) {
    return undefined;
  }

  const result = {};

  result.userValue = color;

  const colorType = typeOfColor(color);
  result.type = colorType;

  const colorTypesWithAlpha = ["rgba", "hsla", "hex4", "hex8"];
  const isAlpha = colorTypesWithAlpha.includes(colorType);
  result.alpha = isAlpha;

  if (!isAlpha) {
    result.rgb = toRgb(color);
    result.hex = toHex(color);
  } else {
    // if we have a transparent color
    // baked in assumption of white behind the background
    const bgRgb = keyName === "bgColor" ? ASSUMED_BACKGROUND_COLOR : bgColorRgb;
    const overlayRgb = calculateOverlay(toRgba(color), bgRgb);
    result.rgb = overlayRgb;
    result.hex = rgbArrayToHex(overlayRgb);
  }

  return result;
};

export { colorTranslate };
