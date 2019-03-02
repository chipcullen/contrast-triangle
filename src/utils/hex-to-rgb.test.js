import { hexToRgb } from "./hex-to-rgb";

describe("Hex to RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(hexToRgb("#000000")[0]).toBe(0);
    expect(hexToRgb("#000000")[1]).toBe(0);
    expect(hexToRgb("#000000")[2]).toBe(0);
  });

  it("correct rgb for white", () => {
    expect(hexToRgb("#ffffff")[0]).toBe(255);
    expect(hexToRgb("#ffffff")[1]).toBe(255);
    expect(hexToRgb("#ffffff")[2]).toBe(255);
  });

  it("correct rgb for hotpink", () => {
    expect(hexToRgb("#ff69b4")[0]).toBe(255);
    expect(hexToRgb("#ff69b4")[1]).toBe(105);
    expect(hexToRgb("#ff69b4")[2]).toBe(180);
  });
});
