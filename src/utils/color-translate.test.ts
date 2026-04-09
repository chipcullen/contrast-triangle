import { colorTranslate } from "./color-translate";

describe("Color Translate", () => {
  it("returns result from hsl", () => {
    expect(colorTranslate("hsl(30 100% 50%)", [0, 0, 0], true)).toEqual({
      alpha: false,
      hex: "#ff8000",
      rgb: [255, 128, 0],
      type: "hsl",
      userValue: "hsl(30 100% 50%)"
    });
  });

  it("returns result for legacy hsl syntax", () => {
    expect(colorTranslate("hsl(30, 100%, 50%)", [0, 0, 0], true)).toEqual({
      alpha: false,
      hex: "#ff8000",
      rgb: [255, 128, 0],
      type: "hsl",
      userValue: "hsl(30, 100%, 50%)"
    });
  });

  it("returns result for hsl with alpha background", () => {
    expect(
      colorTranslate("hsl(30 100% 50% / 80%)", [0, 0, 0], true)
    ).toEqual({
      alpha: true,
      hex: "#ff9932",
      rgb: [255, 153, 50],
      type: "hsl",
      userValue: "hsl(30 100% 50% / 80%)"
    });
  });

  it("returns result for hsl with alpha text color", () => {
    expect(
      colorTranslate("hsl(30 100% 50% / 80%)", [0, 0, 0])
    ).toEqual({
      alpha: true,
      hex: "#cc6600",
      rgb: [204, 102, 0],
      type: "hsl",
      userValue: "hsl(30 100% 50% / 80%)"
    });
  });

  it("returns result for hex text color", () => {
    expect(colorTranslate("#badbad", [0, 0, 0])).toEqual({
      alpha: false,
      hex: "#badbad",
      rgb: [186, 219, 173],
      type: "hex6",
      userValue: "#badbad"
    });
  });

  it("returns result from modern rgb syntax", () => {
    expect(colorTranslate("rgb(255 128 0)", [0, 0, 0], true)).toEqual({
      alpha: false,
      hex: "#ff8000",
      rgb: [255, 128, 0],
      type: "rgb",
      userValue: "rgb(255 128 0)"
    });
  });

  it("returns result from rgb with alpha", () => {
    const result = colorTranslate("rgb(255 0 0 / 50%)", [255, 255, 255]);
    expect(result.alpha).toBe(true);
    expect(result.type).toBe("rgb");
    expect(result.rgb).toEqual([255, 127, 127]);
  });

  it("returns result from lch", () => {
    const result = colorTranslate("lch(50% 50 30)", [255, 255, 255], true);
    expect(result.alpha).toBe(false);
    expect(result.type).toBe("lch");
    expect(result.hex).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("returns result from oklch", () => {
    const result = colorTranslate("oklch(0.5 0.2 30)", [255, 255, 255], true);
    expect(result.alpha).toBe(false);
    expect(result.type).toBe("oklch");
    expect(result.hex).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("returns result from p3", () => {
    const result = colorTranslate("color(display-p3 1 0 0)", [255, 255, 255], true);
    expect(result.alpha).toBe(false);
    expect(result.type).toBe("p3");
    expect(result.hex).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("returns fallback for invalid color", () => {
    const result = colorTranslate("notacolor", [255, 255, 255]);
    expect(result.type).toBe("none");
    expect(result.rgb).toEqual([255, 255, 255]);
  });
});
