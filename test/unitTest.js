import { expect } from "chai";

describe("Addition of a and b", () => {
  it("should return NaN when both a and b are undefined", () => {
    let a;
    let b;
    let c = a + b;
    expect(c).to.be.NaN;
  });

  it("should return a valid number when both a and b are numbers", () => {
    let a = 5;
    let b = 3;
    let c = a + b;
    expect(c).to.equal(8);
  });

  it("should handle null values correctly", () => {
    let a = null;
    let b = 5;
    let c = a + b;
    expect(c).to.equal(5); // null is treated as 0 in addition
  });

  it("should concatenate if a or b is a string", () => {
    let a = "Hello ";
    let b = "World";
    let c = a + b;
    expect(c).to.equal("Hello World");
  });

  it("should return NaN if a is a number and b is undefined", () => {
    let a = 10;
    let b;
    let c = a + b;
    expect(c).to.be.NaN;
  });

  it("should return NaN if b is a number and a is undefined", () => {
    let a;
    let b = 10;
    let c = a + b;
    expect(c).to.be.NaN;
  });
});
