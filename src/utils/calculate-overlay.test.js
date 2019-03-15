import { calculateOverlay } from "./calculate-overlay";

describe("Calculate Overlay", () => {
  it("returns undefined for bad values", () => {
    expect(calculateOverlay([255, 255, 255, 0.8], [0, 0, 0])).toEqual([
      204,
      204,
      204
    ]);
  });
});
