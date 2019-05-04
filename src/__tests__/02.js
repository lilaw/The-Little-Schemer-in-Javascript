import { lat, member } from "../02";

test("lat check whether all item is atom or not", () => {
  let allIsAtom = [0, "s", true];
  let includeAArray = [0, "s", [], true];

  expect(lat(allIsAtom)).toBe(true);
  expect(lat(includeAArray)).toBe(false);
});

test("determines whether an array includes a certain value", () => {
  let a = "a";
  let hasA = ["I", "have", "a", "value"];
  let noA = ["I", "have", "no", "value"];

  expect(member(a, hasA)).toBe(true);
  expect(member(a, noA)).toBe(false);
});
