// https://gist.github.com/jfsiii/5641126
const getLuminance = (r: number, g: number, b: number): number => {
  const RsRGB = r / 255;
  const GsRGB = g / 255;
  const BsRGB = b / 255;

  const R = RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
  const G = GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
  const B = BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

const calculateContrast = (color1: Array<number>, color2: Array<number>): number => {
  const l1 = getLuminance(color1[0], color1[1], color1[2]);
  const l2 = getLuminance(color2[0], color2[1], color2[2]);

  const contrast = l1 > l2
    ? (l1 + 0.05) / (l2 + 0.05)
    : (l2 + 0.05) / (l1 + 0.05);

  return parseFloat(contrast.toFixed(2));
};

export { calculateContrast };
