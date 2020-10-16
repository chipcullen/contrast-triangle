import { getLuminance } from "./get-luminance";

const calculateContrast = (color1:Array<number>, color2:Array<number>): number => {
  const l1 = getLuminance(color1[0], color1[1], color1[2]);
  const l2 = getLuminance(color2[0], color2[1], color2[2]);

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
