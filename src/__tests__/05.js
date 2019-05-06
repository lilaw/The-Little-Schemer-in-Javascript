import {
  remberstar,
  insertRstart,
  occurstar,
  subststar,
  insertLstar,
  memberstar,
  leftmost,
  flattenDeep,
  eqlist,
  equal
} from "../05";

it("remberstar", () => {
  let a = "sauce";
  let l = [
    [["omato", "sauce"]],
    [["ean"], "sauce"],
    ["nd", [["lying"]], "sauce"]
  ];
  let result = [[["omato"]], [["ean"]], ["nd", [["lying"]]]];

  expect(remberstar(a, l)).toEqual(result);
});

it("insertRstart", () => {
  let fresh = "flour";
  let old = "sauce";
  let l = [
    [["omato", "sauce"]],
    [["ean"], "sauce"],
    ["nd", [["lying"]], "sauce"]
  ];
  let result = [
    [["omato", "sauce", fresh]],
    [["ean"], "sauce", fresh],
    ["nd", [["lying"]], "sauce", fresh]
  ];

  expect(insertRstart(fresh, old, l)).toEqual(result);
});

it("occurstar", () => {
  let a = "sauce";
  let l = [
    [["omato", "sauce"]],
    [["ean"], "sauce"],
    ["nd", [["lying"]], "sauce"]
  ];
  let result = 3;

  expect(occurstar(a, l)).toBe(result);
});

it("subststar", () => {
  let fresh = "flour";
  let old = "sauce";
  let l = [[["omato", old]], [["ean"], old], ["nd", [["lying"]], old]];
  let result = [
    [["omato", fresh]],
    [["ean"], fresh],
    ["nd", [["lying"]], fresh]
  ];

  expect(subststar(fresh, old, l)).toEqual(result);
});

it("insertLstar", () => {
  let fresh = "flour";
  let old = "sauce";
  let l = [
    [["omato", "sauce"]],
    [["ean"], "sauce"],
    ["nd", [["lying"]], "sauce"]
  ];
  let result = [
    [["omato", fresh, "sauce"]],
    [["ean"], fresh, "sauce"],
    ["nd", [["lying"]], fresh, "sauce"]
  ];

  expect(insertLstar(fresh, old, l)).toEqual(result);
});

it("memberstar", () => {
  let a = "sauce";
  let l = [
    [["omato", "sauce"]],
    [["ean"], "sauce"],
    ["nd", [["lying"]], "sauce"]
  ];

  expect(memberstar(a, l)).toEqual(true);
});

it("leftmost", () => {
  let l = [[["hot"], ["tuna", ["and"]]], "cheese"];

  expect(leftmost(l)).toBe("hot");
});

it("flattenDeep", () => {
  let l = [[["hot"], ["tuna", ["and"]]], "cheese"];
  let result = ["hot", "tuna", "and", "cheese"];

  expect(flattenDeep(l)).toEqual(result);
});

it("eqlist", () => {
  let l1 = ["beef", [["sausage"]], ["and", ["soda"]]];
  let l2 = ["beef", [["sausage"]], ["and", ["soda"]]];

  expect(eqlist(l1, l2)).toBe(true)
});

it("equal", () => {
  let l1 = ["beef", [["sausage"]], ["and", ["soda"]]];
  let l2 = ["beef", [["sausage"]], ["and", ["soda"]]];

  expect(equal(l1, l2)).toBe(true)
});
