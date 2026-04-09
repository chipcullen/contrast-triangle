import Color from "colorjs.io";
import { typeOfColor, normalizeForParsing } from "./type-of-color";
import { calculateOverlay } from "./calculate-overlay";
import { ASSUMED_BACKGROUND_COLOR } from "../Constants";

const rgbArrayToHex = (rgb: Array<number>): string => {
  return `#${rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
};

const colorTranslate = (
  color: string,
  bgColorRgb: Array<number>,
  isBackground: boolean = false
): ColorObject => {
  const result = {} as ColorObject;
  result.userValue = color;
  result.type = typeOfColor(color);

  let parsed: Color;
  try {
    parsed = new Color(normalizeForParsing(color));
  } catch {
    return {
      userValue: color,
      type: "none",
      alpha: false,
      rgb: [255, 255, 255],
      hex: "#ffffff",
    };
  }

  const hasAlpha = parsed.alpha < 1;
  result.alpha = hasAlpha;

  const srgb = parsed.toGamut({ space: "srgb" }).to("srgb");
  const [r, g, b] = srgb.coords.map((v: number | null) =>
    Math.round((v ?? 0) * 255)
  );
  const a = parsed.alpha;

  const bgRgb = isBackground ? ASSUMED_BACKGROUND_COLOR : bgColorRgb;

  if (hasAlpha) {
    const overlayRgb = calculateOverlay([r, g, b, a], bgRgb);
    result.rgb = overlayRgb;
    result.hex = rgbArrayToHex(overlayRgb);
  } else {
    result.rgb = [r, g, b];
    result.hex = rgbArrayToHex([r, g, b]);
  }

  return result;
};

export { colorTranslate };
