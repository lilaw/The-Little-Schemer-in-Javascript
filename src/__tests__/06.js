import { isNumbered, value, ualue } from "../06";

it("isNumbered", () => {
  let aexp = [3, "+", [4, "X", 5]];

  expect(isNumbered(aexp)).toBe(true);
});

it("value", () => {
  let nexp = [3, "+", [4, "X", 5]];
  let result = 23;

  expect(value(nexp)).toBe(result);
});

it("ualue", () => {
  let nexp = ["+", 3, ["X", 4, 5]];
  let result = 23;

  expect(ualue(nexp)).toBe(result);
});
