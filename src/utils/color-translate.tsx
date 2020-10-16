import { toRgb } from "./to-rgb";
import { toRgba } from "./to-rgba";
import { rgbArrayToHex, toHex } from "./to-hex";
import { typeOfColor } from "./type-of-color";
import { calculateOverlay } from "./calculate-overlay";
import { ASSUMED_BACKGROUND_COLOR, BGCOLOR } from "../Constants";

type Result = {
  userValue: string;
  type: string | undefined;
  alpha: boolean;
  rgb: Array<number> | undefined;
  hex: string | undefined;
}

const colorTranslate = (keyName: string, color: string, bgColorRgb: Array<number>): object | undefined => {
  const colorType = typeOfColor(color);

  // if no real color value, return undefined
  if (!colorType) {
    return undefined;
  }

  const result = {} as Result;

  result.userValue = color;
  result.type = colorType;

  const colorTypesWithAlpha = ["rgba", "hsla", "hex4", "hex8"];
  const isAlpha = colorTypesWithAlpha.includes(colorType);
  result.alpha = isAlpha;

  const colorAsRgba = toRgba(color);
  // baked in assumption of white behind the background
  const bgRgb = keyName === BGCOLOR ? ASSUMED_BACKGROUND_COLOR : bgColorRgb;

  // if we have a transparent color
  if (isAlpha && colorAsRgba) {
    const overlayRgb = calculateOverlay(colorAsRgba, bgRgb);
    result.rgb = overlayRgb;
    result.hex = rgbArrayToHex(overlayRgb);
  } else {
    result.rgb = toRgb(color);
    result.hex = toHex(color);
  }

  return result;
};

export { colorTranslate };
