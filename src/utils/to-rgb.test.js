import { hexToRgb, hslToRgb } from "./to-rgb";

describe("Hex to RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(hexToRgb("#000000")[0]).toBe(0);
    expect(hexToRgb("#000000")[1]).toBe(0);
    expect(hexToRgb("#000000")[2]).toBe(0);

    expect(hexToRgb("#000")[0]).toBe(0);
    expect(hexToRgb("#000")[1]).toBe(0);
    expect(hexToRgb("#000")[2]).toBe(0);
  });

  it("correct rgb for white", () => {
    expect(hexToRgb("#ffffff")[0]).toBe(255);
    expect(hexToRgb("#ffffff")[1]).toBe(255);
    expect(hexToRgb("#ffffff")[2]).toBe(255);

    expect(hexToRgb("#fff")[0]).toBe(255);
    expect(hexToRgb("#fff")[1]).toBe(255);
    expect(hexToRgb("#fff")[2]).toBe(255);
  });

  it("correct rgb for hotpink", () => {
    expect(hexToRgb("#ff69b4")[0]).toBe(255);
    expect(hexToRgb("#ff69b4")[1]).toBe(105);
    expect(hexToRgb("#ff69b4")[2]).toBe(180);
  });
});

describe("HSL to RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(hslToRgb("hsl(0, 0%, 0%)")[0]).toBe(0);
    expect(hslToRgb("hsl(0, 0%, 0%)")[1]).toBe(0);
    expect(hslToRgb("hsl(0, 0%, 0%)")[2]).toBe(0);
  });

  it("correct rgb for white", () => {
    expect(hslToRgb("hsl(0, 0%, 100%)")[0]).toBe(255);
    expect(hslToRgb("hsl(0, 0%, 100%)")[1]).toBe(255);
    expect(hslToRgb("hsl(0, 0%, 100%)")[2]).toBe(255);
  });

  // it("correct rgb for hotpink", () => {
  //   expect(hexToRgb("#ff69b4")[0]).toBe(255);
  //   expect(hexToRgb("#ff69b4")[1]).toBe(105);
  //   expect(hexToRgb("#ff69b4")[2]).toBe(180);
  // });
});
