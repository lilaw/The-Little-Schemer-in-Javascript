import {
  isSet,
  makeset,
  isSubset,
  isEqset,
  isIntersect,
  intersect,
  union,
  difference,
  intersectall,
  isAPair,
  isFun,
  revrel,
  isFullfun
} from "../07";

it("isSet", () => {
  let set = ["peaches", "banana", "plum", "apple"];
  let notset = ["apple", "peaches", "banana", "plum", "apple"];

  expect(isSet(set)).toBe(true);
  expect(isSet(notset)).toBe(false);
});

it("makeset", () => {
  // let set = ['peaches', 'banana', 'plum', 'apple']
  // let notset = ['apple', 'peaches', 'banana', 'plum', 'apple']
  let set = ["apple", "peaches", "banana", "plum"];
  let notset = ["apple", "peaches", "banana", "plum"];

  expect(makeset(notset)).toEqual(set);
});

it("isSubset, each atom in set1 is also in set2", () => {
  let set1 = [5, "chicken", "wings"];
  let set2 = [
    5,
    "hamburgers",
    2,
    "pieces",
    "fried",
    "chicken",
    "and",
    "light",
    "duckling",
    "wings"
  ];

  expect(isSubset(set1, set2)).toBe(true);
});

it("isEqset", () => {
  let set1 = ["apple", "peaches", "banana", "plum"];
  let set2 = [...set1].sort();

  expect(isEqset(set1, set2)).toBe(true);
});

it("isIntersect, at least one atom in set1 is inset2", () => {
  let set1 = ["pineapple", "cherries", "banana"];
  let set2 = ["apple", "peaches", "banana", "plum"];

  expect(isIntersect(set1, set2)).toBe(true);
});

it("intersect", () => {
  let set1 = ["pineapple", "cherries", "banana"];
  let set2 = ["apple", "peaches", "banana", "plum"];
  let result = ["banana"];

  expect(intersect(set1, set2)).toEqual(result);
});

it("union, remove duplicate item in set2 and concatenate them", () => {
  let set1 = ["pineapple", "cherries", "banana"];
  let set2 = ["apple", "peaches", "banana", "plum"];
  let result = ["pineapple", "cherries", "apple", "peaches", "banana", "plum"];

  expect(union(set1, set2)).toEqual(result);
});

it("difference", () => {
  let set1 = ["pineapple", "cherries", "banana"];
  let set2 = ["apple", "peaches", "banana", "plum"];
  let result = ["pineapple", "cherries"];

  expect(difference(set1, set2)).toEqual(result);
});

it("intersectall", () => {
  let lSet = [
    [6, "pears", "and"],
    [3, "peaches", "and", 6, "peppers"],
    [8, "pears", "and", 6, "plums"],
    ["and", 6, "prunes", "with", "some", "apples"]
  ];

  expect(intersectall(lSet)).toEqual([6, "and"])
});

it("isAPair", () => {
  let x = [['kiwis'], 'pomegranate']

  expect(isAPair(x)).toBe(true)
});

it("isFun, return true if first item of each pair is difference", () => {
  let x1 = [[8, 3], [4, 2], [7, 6], [6, 2], [3, 4]]
  let x2 = [[8, 3], [8, 2], [7, 6], [6, 2], [3, 4]]

  expect(isFun(x1)).toBe(true)
  expect(isFun(x2)).toBe(false)
});

it("revrel", () => {
  let x1 = [[8, 3], [4, 2], [7, 6], [6, 2], [3, 4]]
  let result = x1.map(pair => [...pair].reverse())

  expect(revrel(x1)).toEqual(result)
});

it("isFullfun", () => {
  let x1 = [[8, 3], [4, 2], [7, 6], [6, 1], [3, 4]]
  let x2 = [[8, 3], [4, 3], [7, 6], [6, 1], [3, 4]]

  expect(isFullfun(x1)).toBe(true)
  expect(isFullfun(x2)).toBe(false)
});

it("", () => {

});
