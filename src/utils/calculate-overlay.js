const calculateOverlay = (foreGroundRgba, backgroundRgb) => {
  const fgR = foreGroundRgba[0];
  const fgG = foreGroundRgba[1];
  const fgB = foreGroundRgba[2];
  const fgA = foreGroundRgba[3];

  const bgR = backgroundRgb[0];
  const bgG = backgroundRgb[1];
  const bgB = backgroundRgb[2];

  const channelResult = (fg, bg, alpha) => {
    return Math.round(alpha * fg + (1 - alpha) * bg);
  };

  const r = channelResult(fgR, bgR, fgA);
  const g = channelResult(fgG, bgG, fgA);
  const b = channelResult(fgB, bgB, fgA);

  return [+r, +g, +b];
};

export { calculateOverlay };
