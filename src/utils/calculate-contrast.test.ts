import { calculateContrast } from "./calculate-contrast";

describe("Contrast Calculations", () => {
  it("correct contrast calculation black, white", () => {
    expect(calculateContrast([0, 0, 0], [255, 255, 255])).toBe(21);
  });

  it("correct contrast calculation black, black", () => {
    expect(calculateContrast([0, 0, 0], [0, 0, 0])).toBe(1);
  });

  it("correct contrast calculation black, blue", () => {
    expect(calculateContrast([0, 0, 0], [0, 0, 255])).toBe(2.44);
  });

  it("correct contrast calculation black, red", () => {
    expect(calculateContrast([0, 0, 0], [255, 0, 0])).toBe(5.25);
  });

  it("correct contrast calculation black, hotpink", () => {
    expect(calculateContrast([0, 0, 0], [255, 105, 180])).toBe(7.93);
  });
});
