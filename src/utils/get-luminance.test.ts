import { getLuminance } from "./get-luminance";

describe("Luminance Calculations", () => {
  it("correct luminance for black", () => {
    expect(getLuminance(0, 0, 0)).toBe(0);
  });

  it("correct luminance for white", () => {
    expect(getLuminance(255, 255, 255)).toBe(1);
  });

  it("correct luminance for hotpink", () => {
    expect(getLuminance(255, 105, 180)).toBe(0.3465843816971475);
  });
});
