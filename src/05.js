import { isNull, isEq, isAtom, isList as isArray, add1 } from "./little";
import { plus } from "./04"

function remberstar(a,l) {
  let [first, ...rest] = l;
  return isNull(first) 
    ? [] 
    : isArray(first) 
        ? [remberstar(a, first), ...remberstar(a, rest)] 
        : isEq(first, a) 
          ? remberstar(a, rest) 
          : [first, ...remberstar(a, rest)]
}

function insertRstart(fresh, old, l) {
  let [first, ...rest] = l;
  if (isNull(first)) return []
  if (isArray(first)) return [insertRstart(fresh, old, first), ...insertRstart(fresh, old, rest)]
  if (isEq(first, old)) return [old, fresh, ...insertRstart(fresh, old, rest)]
  return [first, ...insertRstart(fresh, old, rest)]
}

function occurstar(a, l) {
  let [first, ...rest] = l;
  return isNull(first)
    ? 0
    : isArray(first)
      ? plus(occurstar(a, first), occurstar(a, rest))
      : isEq(first, a) 
          ? add1(occurstar(a, rest)) 
          : occurstar(a, rest)
}

function subststar(fresh, old, l) {
  let [first, ...rest] = l;
  return isNull(first) 
    ? [] 
    : isArray(first)
      ? [subststar(fresh, old, first), ...subststar(fresh, old, rest)]
      : isEq(old, first)
          ? [fresh, ...subststar(fresh, old, rest)]
          : [first, ...subststar(fresh, old, rest)]
}

function  insertLstar(fresh, old, l) {
  let [first, ...rest] = l;
  return isNull(first)
    ? []
    : isArray(first)
      ? [insertLstar(fresh, old, first), ...insertLstar(fresh, old, rest)]
      : isEq(old, first)
        ? [fresh, old, ...insertLstar(fresh, old, rest)]
        : [first, ...insertLstar(fresh, old, rest)]
}

function memberstar(a, l) {
  let [first, ...rest] = l;
  return isNull(first) 
    ? false
    : isArray(first)
      ? (memberstar(a, first) || memberstar(a, rest))
      : isEq(first, a)
        ? true
        : memberstar(a, rest)
}

function leftmost(l) {
  let [first] = l;
  return isArray(first) 
    ? leftmost(first)
    : first
}

function flattenDeep(l) {
  let [first, ...rest] = l;
  return isNull(first)
    ? []
    : isArray(first)
      ? [...flattenDeep(first), ...flattenDeep(rest)]
      : [first, ...flattenDeep(rest)] 
}

// l1  isnull atom list
// l2  isnull atom list
function eqlist(l1, l2) {
  let [first1, ...rest1] = l1;
  let [first2, ...rest2] = l2;
  
  // return (isNull(first1) && isNull(first2))
  //   ? true
  //   : (isNull(first1) && isAtom(first2))
  //   ? false
  //   : (isNull(first1) && isArray(first2))
  //   ? false

  //   : (isAtom(first1) && isNull(first2))
  //   ? false
  //   : (isAtom(first1) && isAtom(first2)) 
  //   ? (isEq(first1, first2) && eqlist(rest1, rest2))
  //   : (isAtom(first1) && isArray(first2))
  //   ? false

  //   : (isArray(first1) && isNull(first2))
  //   ? false
  //   : (isArray(first1) && isAtom(first2))
  //   ? false
  //   : (eqlist(first1, first2) && eqlist(rest1, rest2))
  
  // return (isNull(first1) && isNull(first2))
  //   ? true
  //   : (isNull(first1) || isNull(first2))
  //   ? false
  //   : (isAtom(first1) && isNull(first2))
  //   ? false
  //   : (isAtom(first1) && isAtom(first2)) 
  //   ? (isEq(first1, first2) && eqlist(rest1, rest2))
  //   : (isAtom(first1) || isAtom(first2))
  //   ? false
  //   : (eqlist(first1, first2) && eqlist(rest1, rest2))
  
  return (isNull(first1) && isNull(first2))
    ? true
    : (isNull(first1) || isNull(first2))
    ? false
    : (equal(first1, first2) && equal(rest1, rest2))
}

function equal(s1, s2) {
  return (isAtom(s1) && isAtom(s2))
    ? isEq(s1, s2)
    : (isAtom(s1) || isAtom(s2))
    ? false
    : eqlist(s1, s2)
}
export { remberstar, insertRstart, occurstar, subststar, insertLstar, memberstar, leftmost, flattenDeep, eqlist, equal}