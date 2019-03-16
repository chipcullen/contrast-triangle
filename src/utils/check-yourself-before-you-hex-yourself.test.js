import { checkYourSelfBeforeYouHexYourself } from "./check-yourself-before-you-hex-yourself";

describe("Check Yourself Before You Hex Yourself", () => {
  it("returns correct value for black", () => {
    expect(checkYourSelfBeforeYouHexYourself("hsl(0, 0%, 0%)")).toBe(
      "hsl(0, 0%, 0%)"
    );
    expect(checkYourSelfBeforeYouHexYourself("000000")).toBe("#000000");
    expect(checkYourSelfBeforeYouHexYourself("#000000")).toBe("#000000");
  });

  it("returns correct value for white", () => {
    expect(checkYourSelfBeforeYouHexYourself("hsl(0, 0%, 100%)")).toBe(
      "hsl(0, 0%, 100%)"
    );
    expect(checkYourSelfBeforeYouHexYourself("fff")).toBe("#fff");
    expect(checkYourSelfBeforeYouHexYourself("#fff")).toBe("#fff");
  });
});
