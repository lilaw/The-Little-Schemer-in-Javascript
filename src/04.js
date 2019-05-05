import {   } from "ramda";
import { isNull, isZero, isNumber, isEq, add1, sub1 } from "./little";

function plus(n, m) {
  return isZero(m) ? n : add1(plus(n, sub1(m)));
}

function minus(n, m) {
  return isZero(m) ? n : sub1(minus(n, sub1(m)));
}

function addtup(tup) {
  let [first, ...rest] = tup;
  return isNull(first) ? 0 : plus(first, addtup(rest));
}

function star(n, m) {
  return isZero(m) ? 0 : plus(n, star(n, sub1(m)));
}

function tupplus(tup1, tup2) {
  let [first1, ...rest1] = tup1;
  let [first2, ...rest2] = tup2;
  return isNull(first1)
    ? tup2
    : isNull(first2)
    ? tup1
    : [plus(first1, first2), ...tupplus(rest1, rest2)];
}

function lessThan(n, m) {
  return isZero(m) ? false : isZero(n) ? true : lessThan(sub1(n), sub1(m))
}

function greaterThan(n, m) {
  return isZero(n) ? false : isZero(m) ? true : greaterThan(sub1(n), sub1(m))
}

function equal(n, m) {
  return lessThan(n, m) ? false : greaterThan(n, m) ? false : true
}

function power(n, m) {
  return isZero(m) ? 1 : star(n, power(n, sub1(m)))
}

function quotient(n, m) {
  return lessThan(n, m) ? 0 : add1(quotient(n - m, m))
}

function length([first, ...rest]) {
  return isNull(first) ? 0 : add1(length(rest))
}

function pick(n, [first, ...rest]) {
  return isZero(sub1(n)) ? first : pick(sub1(n), rest)
}

function rempick(n, [first, ...rest]) {
  return isNull(first) ? [] : isZero(sub1(n)) ? rest : [first, ...rempick(sub1(n), rest)]
} 

function noNums([first, ...rest]) {
  return isNull(first) ? [] : isNumber(first) ? noNums(rest) : [first, ...noNums(rest)] 
}

function allNums([first, ...rest]) {
  return isNull(first) ? [] : isNumber(first) ? [first, ...allNums(rest)] : allNums(rest)
}

function eqan(a1, a2) {
  return isNumber(a1) && isNumber(a2) ? equal(a1, a2) : isNumber(a1) || isNumber(a2) ? false : isEq(a1, a2)
}

function occur(a, [first, ...rest]) {
  return isNull(first) ? 0 : isEq(a, first) ? add1(occur(a, rest)) : occur(a, rest)
}

function one(n) {
  return isZero(sub1(n))
}

function rempick2(n, [first, ...rest]) {
  return isNull(first) ? [] : one(n) ? rest : [first, ...rempick2(sub1(n), rest)]
}

export { plus, minus, addtup, star, tupplus, lessThan, greaterThan, equal, power, quotient, length, pick, rempick, noNums, allNums, eqan, occur, one, rempick2 };