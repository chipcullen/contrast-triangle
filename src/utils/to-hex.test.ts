import { hexToHex, hslToHex, rgbToHex, toHex } from "./to-hex";

describe("Hex To Hex conversion", () => {
  it("correct hex for black", () => {
    expect(hexToHex("#000")).toEqual("#000000");
    expect(hexToHex("000")).toEqual("#000000");
    expect(hexToHex("#000000")).toEqual("#000000");
    expect(hexToHex("000000")).toEqual("#000000");
  });

  it("correct hex for white", () => {
    expect(hexToHex("#fff")).toEqual("#ffffff");
    expect(hexToHex("fff")).toEqual("#ffffff");
    expect(hexToHex("#ffffff")).toEqual("#ffffff");
    expect(hexToHex("ffffff")).toEqual("#ffffff");
  });
});

describe("HSL to Hex conversion", () => {
  it("correct Hex for black", () => {
    expect(hslToHex("hsl(0, 0%, 0%)")).toBe("#000000");
  });

  it("correct Hex for white", () => {
    expect(hslToHex("hsl(0, 0%, 100%)")).toBe("#ffffff");
  });

    it("correct Hex for orange", () => {
    expect(hslToHex("hsl(30, 100%, 50%)")).toEqual("#ff8000");
  })
});

describe("RGB to Hex conversion", () => {
  it("correct Hex for black", () => {
    expect(rgbToHex("rgb(0, 0, 0)")).toBe("#000000");
  });

  it("correct Hex for white", () => {
    expect(rgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");
  });
});

// integration
describe("To Hex conversion", () => {
  it("correct hex for black", () => {
    expect(toHex("hsl(0, 0%, 0%)")).toEqual("#000000");
    expect(toHex("rgb(0, 0, 0)")).toEqual("#000000");
    expect(toHex("#000")).toEqual("#000000");
    expect(toHex("000")).toEqual("#000000");
    expect(toHex("#000000")).toEqual("#000000");
    expect(toHex("000000")).toEqual("#000000");
  });

  it("correct hex for white", () => {
    expect(toHex("hsl(0, 0%, 100%)")).toEqual("#ffffff");
    expect(toHex("rgb(255, 255, 255)")).toEqual("#ffffff");
    expect(toHex("#fff")).toEqual("#ffffff");
    expect(toHex("fff")).toEqual("#ffffff");
    expect(toHex("#ffffff")).toEqual("#ffffff");
    expect(toHex("ffffff")).toEqual("#ffffff");
  });

  it("correct hex for orange", () => {
    expect(toHex("hsl(30, 100%, 50%)")).toEqual("#ff8000");
  })
});
