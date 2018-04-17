import { hexToRgb } from './hex-to-rgb';
import { getLuminance } from './get-luminance';

const calculateContrast = (hex1, hex2) => {
  const hex1rgb = hexToRgb(hex1);
  const hex2rgb = hexToRgb(hex2);

  const l1 = getLuminance(hex1rgb[0], hex1rgb[1], hex1rgb[2]);
  const l2 = getLuminance(hex2rgb[0], hex2rgb[1], hex2rgb[2]);

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
