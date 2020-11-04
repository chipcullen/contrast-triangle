import { toRgb } from "./to-rgb";
import { toRgba } from "./to-rgba";
import { rgbArrayToHex, toHex } from "./to-hex";
import { typeOfColor, safeTypeOfColor } from "./type-of-color";
import { calculateOverlay } from "./calculate-overlay";
import { ASSUMED_BACKGROUND_COLOR } from "../Constants";

const colorLogic = (color: string, bgColorRgb: Array<number>, isBackground: boolean = false, colorType: string ): ColorObject => {
  const result = {} as ColorObject;

  result.userValue = color;
  result.type = colorType;

  const colorTypesWithAlpha = ["rgba", "hsla", "hex4", "hex8"];
  const isAlpha = colorTypesWithAlpha.includes(colorType);
  result.alpha = isAlpha;

  const colorAsRgba = toRgba(color);
  // baked in assumption of white behind the background
  const bgRgb = isBackground ? ASSUMED_BACKGROUND_COLOR : bgColorRgb;

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

const colorTranslate = (color: string, bgColorRgb: Array<number>, isBackground: boolean = false ): ColorObject=> {
  const colorType = safeTypeOfColor(color);

  // if no real color value, return undefined
  // if (!colorType) {
  //   return undefined;
  // }

  return colorLogic(color, bgColorRgb, isBackground, colorType);
};

const initColorTranslate = (color: string, bgColorRgb: Array<number>, isBackground: boolean = false ): ColorObject => {
  const colorType = safeTypeOfColor(color);

  return colorLogic(color, bgColorRgb, isBackground, colorType);
};

export { colorTranslate, initColorTranslate };
