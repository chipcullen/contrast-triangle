import { hexAToRgba, hslToRgba, rgbaToRgba, toRgba } from "./to-rgba";

describe("HexA to RGBA conversion", () => {
  it("correct rgba for black", () => {
    expect(hexAToRgba("#00000000")[0]).toBe(0);
    expect(hexAToRgba("#00000000")[1]).toBe(0);
    expect(hexAToRgba("#00000000")[2]).toBe(0);
    expect(hexAToRgba("#00000000")[3]).toBe(0);

    expect(hexAToRgba("00000000")[0]).toBe(0);
    expect(hexAToRgba("00000000")[1]).toBe(0);
    expect(hexAToRgba("00000000")[2]).toBe(0);
    expect(hexAToRgba("00000000")[3]).toBe(0);

    expect(hexAToRgba("#0000")[0]).toBe(0);
    expect(hexAToRgba("#0000")[1]).toBe(0);
    expect(hexAToRgba("#0000")[2]).toBe(0);
    expect(hexAToRgba("#0000")[3]).toBe(0);

    expect(hexAToRgba("0000")[0]).toBe(0);
    expect(hexAToRgba("0000")[1]).toBe(0);
    expect(hexAToRgba("0000")[2]).toBe(0);
    expect(hexAToRgba("0000")[3]).toBe(0);
  });

  it("correct rgba for white", () => {
    expect(hexAToRgba("#ffffff00")[0]).toBe(255);
    expect(hexAToRgba("#ffffff00")[1]).toBe(255);
    expect(hexAToRgba("#ffffff00")[2]).toBe(255);
    expect(hexAToRgba("#ffffff00")[3]).toBe(0);

    expect(hexAToRgba("ffffff00")[0]).toBe(255);
    expect(hexAToRgba("ffffff00")[1]).toBe(255);
    expect(hexAToRgba("ffffff00")[2]).toBe(255);
    expect(hexAToRgba("ffffff00")[3]).toBe(0);

    expect(hexAToRgba("#fff0")[0]).toBe(255);
    expect(hexAToRgba("#fff0")[1]).toBe(255);
    expect(hexAToRgba("#fff0")[2]).toBe(255);
    expect(hexAToRgba("#fff0")[3]).toBe(0);

    expect(hexAToRgba("fff0")[0]).toBe(255);
    expect(hexAToRgba("fff0")[1]).toBe(255);
    expect(hexAToRgba("fff0")[2]).toBe(255);
    expect(hexAToRgba("fff0")[3]).toBe(0);
  });

  it("correct rgba for hotpink", () => {
    expect(hexAToRgba("#ff69b400")[0]).toBe(255);
    expect(hexAToRgba("#ff69b400")[1]).toBe(105);
    expect(hexAToRgba("#ff69b400")[2]).toBe(180);
    expect(hexAToRgba("#ff69b400")[3]).toBe(0);
  });
});

describe("HSLa to RGBa conversion", () => {
  it("correct rgb for black", () => {
    expect(hslToRgba("hsla(0, 0%, 0%, 1)")[0]).toBe(0);
    expect(hslToRgba("hsla(0, 0%, 0%, 1)")[1]).toBe(0);
    expect(hslToRgba("hsla(0, 0%, 0%, 1)")[2]).toBe(0);
    expect(hslToRgba("hsla(0, 0%, 0%, 1)")[3]).toBe(1);
  });

  it("correct rgba for white", () => {
    expect(hslToRgba("hsla(0, 0%, 100%, 1)")[0]).toBe(255);
    expect(hslToRgba("hsla(0, 0%, 100%, 1)")[1]).toBe(255);
    expect(hslToRgba("hsla(0, 0%, 100%, 1)")[2]).toBe(255);
    expect(hslToRgba("hsla(0, 0%, 100%, 1)")[3]).toBe(1);
  });
});

describe("rgba to RGBA conversion", () => {
  it("correct rgb for black", () => {
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[0]).toBe(0);
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[1]).toBe(0);
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[2]).toBe(0);
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[3]).toBe(1);
  });

  it("correct rgb for white", () => {
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[0]).toBe(255);
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[1]).toBe(255);
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[2]).toBe(255);
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[3]).toBe(1);
  });
});

// integration
describe("To RGB conversion", () => {
  it("correct rgb for black", () => {
    expect(toRgba("hsla(0, 0%, 0%, 1)")).toEqual([0, 0, 0, 1]);
    // expect(toRgba("rgb(0, 0, 0)")).toEqual([0, 0, 0]);
    // expect(toRgba("#000")).toEqual([0, 0, 0]);
    // expect(toRgba("000")).toEqual([0, 0, 0]);
    // expect(toRgba("#000000")).toEqual([0, 0, 0]);
    // expect(toRgba("000000")).toEqual([0, 0, 0]);
    // expect(toRgba("black")).toEqual([0, 0, 0]);
  });

  //   it("correct rgb for white", () => {
  //     expect(toRgba("hsl(0, 0%, 100%)")).toEqual([255, 255, 255]);
  //     expect(toRgba("rgb(255, 255, 255)")).toEqual([255, 255, 255]);
  //     expect(toRgba("#fff")).toEqual([255, 255, 255]);
  //     expect(toRgba("fff")).toEqual([255, 255, 255]);
  //     expect(toRgba("#ffffff")).toEqual([255, 255, 255]);
  //     expect(toRgba("ffffff")).toEqual([255, 255, 255]);
  //   });
});
