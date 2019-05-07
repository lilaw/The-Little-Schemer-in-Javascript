import { rember, firsts, insertR, subst, subst2, multirember, multiinsertR } from "../03";

test("rember should remove first occurrence atom in a list", () => {
  let a = "cup";
  let noA = "puc";
  let list = ["coffee", "cup", "tea", "cup", "and", "hick", "cup"];
  let removedFirstOccuAtomList = list.reduce(
    (acc, cur, ind) => (ind === list.indexOf(a) ? acc : [...acc, cur]),
    []
  );

  expect(rember(a, list)).toEqual(removedFirstOccuAtomList);
  expect(rember(noA, list)).toEqual(list);
});

test("firsts return a array of first element", () => {
  let l = [
    ["apple", "peach", "pumpkin"],
    ["plum", "pear", "cherry"],
    ["grape", "raisin", "pea"],
    ["bean", "carrot", "eggplant"]
  ];
  let listOfFirstEle = ["apple", "plum", "grape", "bean"]

  expect(firsts(l)).toEqual(listOfFirstEle)
});


test('insertR return new list inserted to the right of the first occurrence of old', () => {
  let old  = "fudge";
  let fresh = "topping";
  let lat = `ice cream with ${old} for dessert`.split(' ')
  let resule = `ice cream with ${old} ${fresh} for dessert`.split(' ')

  expect(insertR(fresh, old, lat)).toEqual(resule)
})

test('subst replaces the first occurrence of old in the lat with new', () => {
  let old  = "fudge";
  let fresh = "topping";
  let lat = `ice cream with ${old} for dessert`.split(' ')
  let resule = `ice cream with ${fresh} for dessert`.split(' ')

  expect(subst(fresh, old, lat)).toEqual(resule)
})

test('subst2 replaces either the first occurrence of o1 or the first occurrence of o2 by new', () => {
  let o1  = "cream";
  let o2 = "dessert"
  let fresh = "banana";
  let lat = `ice cream with fudge for dessert`.split(' ')
  let resule = `ice ${fresh} with fudge for dessert`.split(' ')

  expect(subst2(fresh, o1, o2, lat)).toEqual(resule)
})


test("multirember remove  all occurrences a ", () => {
  let a = "cup";
  let list = ["coffee", "cup", "tea", "cup", "and", "hick", "cup"];
  let resule = list.filter(el => el !== a)

  expect(multirember(a, list)).toEqual(resule)
})

test('multiinsertR insert new to the right of all of old', () => {
  let old = "cup";
  let fresh = 'a'
  let list = ["coffee", "cup", "tea", "cup", "hick", "mug"];
  let resule = list.reduce((acc, cur) => cur === old? [...acc, cur, fresh] : [...acc, cur], [])

  expect(multiinsertR(fresh, old, list)).toEqual(resule)
})

test('function replaces the first occurrence of old in the lat with new', () => {
  let old  = "fudge";
  let fresh = "topping";
  let lat = `ice cream with ${old} for dessert`.split(' ')
  let resule = `ice cream with ${fresh} for dessert`.split(' ')

  expect(subst(fresh, old, lat)).toEqual(resule)
})