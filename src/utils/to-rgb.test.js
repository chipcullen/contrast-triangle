import { hexToRgb, hslToRgb, rgbToRgb, namedToRgb, toRgb } from "./to-rgb";

describe("Hex to RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(hexToRgb("#000000")[0]).toBe(0);
    expect(hexToRgb("#000000")[1]).toBe(0);
    expect(hexToRgb("#000000")[2]).toBe(0);

    expect(hexToRgb("000000")[0]).toBe(0);
    expect(hexToRgb("000000")[1]).toBe(0);
    expect(hexToRgb("000000")[2]).toBe(0);

    expect(hexToRgb("#000")[0]).toBe(0);
    expect(hexToRgb("#000")[1]).toBe(0);
    expect(hexToRgb("#000")[2]).toBe(0);

    expect(hexToRgb("000")[0]).toBe(0);
    expect(hexToRgb("000")[1]).toBe(0);
    expect(hexToRgb("000")[2]).toBe(0);
  });

  it("correct rgb for white", () => {
    expect(hexToRgb("#ffffff")[0]).toBe(255);
    expect(hexToRgb("#ffffff")[1]).toBe(255);
    expect(hexToRgb("#ffffff")[2]).toBe(255);

    expect(hexToRgb("ffffff")[0]).toBe(255);
    expect(hexToRgb("ffffff")[1]).toBe(255);
    expect(hexToRgb("ffffff")[2]).toBe(255);

    expect(hexToRgb("#fff")[0]).toBe(255);
    expect(hexToRgb("#fff")[1]).toBe(255);
    expect(hexToRgb("#fff")[2]).toBe(255);

    expect(hexToRgb("fff")[0]).toBe(255);
    expect(hexToRgb("fff")[1]).toBe(255);
    expect(hexToRgb("fff")[2]).toBe(255);
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
});

describe("rgb to RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(rgbToRgb("rgb(0, 0, 0)")[0]).toBe(0);
    expect(rgbToRgb("rgb(0, 0, 0)")[1]).toBe(0);
    expect(rgbToRgb("rgb(0, 0, 0)")[2]).toBe(0);
  });

  it("correct rgb for white", () => {
    expect(rgbToRgb("rgb(255, 255, 255)")[0]).toBe(255);
    expect(rgbToRgb("rgb(255, 255, 255)")[1]).toBe(255);
    expect(rgbToRgb("rgb(255, 255, 255)")[2]).toBe(255);
  });
});

// @todo add enzyme or react testing library
// so that styles can be calcuated
// describe("named to RGB conversion", () => {
//   it("correct rgb for black", () => {
//     expect(namedToRgb("black")).toEqual([0, 0, 0]);
//   });

//   it("correct rgb for white", () => {
//     expect(namedToRgb("white")).toEqual([255, 255, 255]);
//   });
// });

// integration
describe("To RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(toRgb("hsl(0, 0%, 0%)")).toEqual([0, 0, 0]);
    expect(toRgb("rgb(0, 0, 0)")).toEqual([0, 0, 0]);
    expect(toRgb("#000")).toEqual([0, 0, 0]);
    expect(toRgb("000")).toEqual([0, 0, 0]);
    expect(toRgb("#000000")).toEqual([0, 0, 0]);
    expect(toRgb("000000")).toEqual([0, 0, 0]);
    // expect(toRgb("black")).toEqual([0, 0, 0]);
  });

  it("correct rgb for white", () => {
    expect(toRgb("hsl(0, 0%, 100%)")).toEqual([255, 255, 255]);
    expect(toRgb("rgb(255, 255, 255)")).toEqual([255, 255, 255]);
    expect(toRgb("#fff")).toEqual([255, 255, 255]);
    expect(toRgb("fff")).toEqual([255, 255, 255]);
    expect(toRgb("#ffffff")).toEqual([255, 255, 255]);
    expect(toRgb("ffffff")).toEqual([255, 255, 255]);
  });
});
