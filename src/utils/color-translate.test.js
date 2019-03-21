import { colorTranslate } from "./color-translate";
import { BGCOLOR, TEXTCOLOR } from "../Constants";

describe("Color Translate", () => {
  it("returns undefined for bad values", () => {
    expect(colorTranslate("foo", "bar", "zam")).toBe(undefined);
  });

  it("returns result from hsl", () => {
    expect(colorTranslate(BGCOLOR, "hsl(30, 100%, 50%)", [0, 0, 0])).toEqual({
      alpha: false,
      hex: "#ff8000",
      rgb: [255, 128, 0],
      type: "hsl",
      userValue: "hsl(30, 100%, 50%)"
    });
  });

  it("returns result for HSLA background", () => {
    expect(
      colorTranslate(BGCOLOR, "hsla(30, 100%, 50%, .8)", [0, 0, 0])
    ).toEqual({
      alpha: true,
      hex: "#ff9932",
      rgb: [255, 153, 50],
      type: "hsla",
      userValue: "hsla(30, 100%, 50%, .8)"
    });
  });

  it("returns result for HSLA text color", () => {
    expect(
      colorTranslate(TEXTCOLOR, "hsla(30, 100%, 50%, .8)", [0, 0, 0])
    ).toEqual({
      alpha: true,
      hex: "#cc6600",
      rgb: [204, 102, 0],
      type: "hsla",
      userValue: "hsla(30, 100%, 50%, .8)"
    });
  });

  it("returns result for hex text color", () => {
    expect(colorTranslate(TEXTCOLOR, "#badbad", [0, 0, 0])).toEqual({
      alpha: false,
      hex: "#badbad",
      rgb: [186, 219, 173],
      type: "hex6",
      userValue: "#badbad"
    });
  });
});
