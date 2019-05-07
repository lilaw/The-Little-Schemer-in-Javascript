import {isNull, isAtom} from './little'
import { head, tail, and, or, isEmpty} from "ramda"
import { member } from './02'
import { multirember, firsts } from './03'

function isSet(lat) {
  let [first, ...rest] = lat
  return isNull(first)
    ? true
    : member(first, rest)
    ? false
    : isSet(rest)
}

function makeset(lat) {
  let [first, ...rest] = lat
  // remove item from the front
  // return isNull(first) 
  //   ? []
  //   : member(first, rest)
  //     ? makeset(rest)
  //     : [first, ...makeset(rest)]
  
  // // remove item from the behind
  return isNull(first) 
  ? []
  : member(first, rest)
    ? makeset(multirember(first, rest))
    : [first, ...makeset(rest)]

}

function isSubset(set1, set2) {
  return isEmpty(set1)
    ? true
    : and(member(head(set1), set2), isSubset(tail(set1), set2))
}

function isEqset(set1, set2) {
  return and(isSubset(set1, set2), isSubset(set2, set1))
}

function isIntersect(set1, set2) {
  return isEmpty(set1)
    ? false
    : or(member(head(set1), set2), isIntersect(tail(set1), set2))
}

function intersect(set1, set2) {
  return isEmpty(set1)
    ? []
    : member(head(set1), set2)
      ? [head(set1), ...intersect(tail(set1), set2)]
      : intersect(tail(set1), set2)
}

function union(set1, set2) {
  return isEmpty(set1)
   ? set2
   : member(head(set1), set2)
    ? union(tail(set1), set2)
    : [head(set1), ...union(tail(set1), set2)]
}

function difference(set1, set2) {
  return isEmpty(set1)
   ? []
   : member(head(set1), set2)
    ? difference(tail(set1), set2)
    : [head(set1), ...difference(tail(set1), set2)]
}

function intersectall(lSet) {
  return isEmpty(tail(lSet))
    ? head(lSet)
    : intersect(head(lSet), intersectall(tail(lSet)))
}

function isAPair (x) {
  return isAtom(x)
    ? false
    : isEmpty(x)
    ? false
    : isEmpty(tail(x))
    ? false
    : isEmpty(tail(tail(x)))
    ? true
    : false
}

function first(p) {
  return head(p)
}

function second(p) {
  return head(tail(p))
}

function third(p) {
  return head(tail(tail(p)))
}

function build(set1, set2) {
  return [set1, set2]
}

function isFun(rel) {
  return isSet(firsts(rel))
}

function revrel(rel) {
  return isEmpty(rel) 
    ? []
    : [build(second(head(rel)), first(head(rel))), ...revrel(tail(rel))]
}

function isFullfun(fun) {
  return (isFun(revrel(fun)))
}
export { isSet, makeset, isSubset, isEqset, isIntersect, intersect, union, difference, intersectall, isAPair, isFun, revrel, isFullfun}