import { calculateContrast } from "./calculate-contrast";

describe("Contrast Calculations", () => {
  it("correct contrast calculation black, white", () => {
    expect(calculateContrast("#000000", "#ffffff")).toBe(21);
  });

  it("correct contrast calculation black, black", () => {
    expect(calculateContrast("#000000", "#000000")).toBe(1);
  });

  it("correct contrast calculation black, blue", () => {
    expect(calculateContrast("#000000", "#0000ff")).toBe(2.44);
  });

  it("correct contrast calculation black, red", () => {
    expect(calculateContrast("#000000", "#ff0000")).toBe(5.25);
  });

  it("correct contrast calculation black, hotpink", () => {
    expect(calculateContrast("#000000", "#ff69b4")).toBe(7.93);
  });
});
