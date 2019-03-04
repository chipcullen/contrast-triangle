import { toRgb } from "./to-rgb";
import { getLuminance } from "./get-luminance";

const calculateContrast = (color1, color2) => {
  const color1rgb = toRgb(color1);
  const color2rgb = toRgb(color2);

  const l1 = getLuminance(color1rgb[0], color1rgb[1], color1rgb[2]);
  const l2 = getLuminance(color2rgb[0], color2rgb[1], color2rgb[2]);

  let contrast = 0;

  // the contrast calculation depends on which is lighter
  if (l1 > l2) {
    contrast = (l1 + 0.05) / (l2 + 0.05);
  } else {
    contrast = (l2 + 0.05) / (l1 + 0.05);
  }

  return parseFloat(contrast.toFixed(2));
};

export { calculateContrast };
