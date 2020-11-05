import { typeOfColor, isValidColor } from "./type-of-color";

describe("Type Of Color", () => {
  it("returns none for a bad value", () => {
    expect(typeOfColor("foo")).toBe("none");
    expect(typeOfColor("#foo")).toBe("none");
    expect(typeOfColor("#fooo")).toBe("none");
    expect(typeOfColor("foobar")).toBe("none");
    expect(typeOfColor("#foobar")).toBe("none");
  });

  it("returns named for a named color", () => {
    expect(typeOfColor("RebeccaPurple")).toBe("named");
    expect(typeOfColor("rebeccapurple")).toBe("named");
    expect(typeOfColor("REBECCAPURPLE")).toBe("named");
  });

  it("returns hex6", () => {
    expect(typeOfColor("#ffffff")).toBe("hex6");
    expect(typeOfColor("ffffff")).toBe("hex6");
  });

  it("returns hex3", () => {
    expect(typeOfColor("#fff")).toBe("hex3");
    expect(typeOfColor("fff")).toBe("hex3");
  });

  it("returns hex4", () => {
    expect(typeOfColor("#fff0")).toBe("hex4");
    expect(typeOfColor("fff0")).toBe("hex4");
  });

  it("returns hex8", () => {
    expect(typeOfColor("#ffffff0A")).toBe("hex8");
    expect(typeOfColor("ffffff0A")).toBe("hex8");
  });

  it("returns rgba", () => {
    expect(typeOfColor("rgba(255, 255, 255, 1)")).toBe("rgba");
  });

  it("returns rgb", () => {
    expect(typeOfColor("rgb(255, 255, 255)")).toBe("rgb");
  });

  it("returns hsla", () => {
    expect(typeOfColor("hsla(0, 0%, 100, 1)")).toBe("hsla");
  });

  it("returns hsl", () => {
    expect(typeOfColor("hsl(0, 0%, 100)")).toBe("hsl");
  });
});

describe("Is Valid Color", () => {
  it("returns false for a bad value", () => {
    expect(isValidColor("foo")).toBe(false);
    expect(isValidColor("#foo")).toBe(false);
    expect(isValidColor("#fooo")).toBe(false);
    expect(isValidColor("#foobar")).toBe(false);
  });

    it("returns true for a good value", () => {
    expect(isValidColor("fff")).toBe(true);
    expect(isValidColor("#fff")).toBe(true);
    expect(isValidColor("#ffff")).toBe(true);
    expect(isValidColor("rgb(255, 255, 255)")).toBe(true);
    expect(isValidColor("hsla(0, 0%, 100, 1)")).toBe(true);
  });


});
