import { plus, minus, addtup, star, tupplus, lessThan, greaterThan, equal, power, length, pick, rempick, noNums, allNums, eqan, occur, rempick2 } from '../04'
import {sum, pipe, not} from 'ramda'

beforeEach(() => {
  jest.resetModules();
});

test("plus", () => {
  expect(plus(5, 0)).toBe(5)
  expect(plus(2, 2)).toBe(4)
})

test("minus", () => {
  expect(minus(5, 0)).toBe(5)
  expect(minus(5, 4)).toBe(1)
})

test("addtup", () => {
  let tup = [2,4,6,8,100,1],
  result = sum(tup)

  expect(addtup(tup)).toBe(result)
})

test("star", () => {
  expect(star(4, 5)).toBe(20)
})

test('tupplus', () => {
  let tup1 = [5, 8, 9]
  let tup2 = [7, 3]
  let result = [12, 11, 9]

  expect(tupplus(tup1, tup2)).toEqual(result)
}) 

test("less then", () => {
  expect(lessThan(5, 10)).toBe(true)
  expect(lessThan(5, 5)).toBe(false)
  expect(lessThan(10, 5)).toBe(false)
})

test("greater than", () => {
  expect(greaterThan(10, 5)).toBe(true)
  expect(greaterThan(5, 5)).toBe(false)
  expect(greaterThan(5, 10)).toBe(false)
})

test("equal", () => {
  expect(equal(5, 5)).toBe(true)
})

test("power", () => {
  expect(power(2, 3)).toBe(8)
})

test('length', () => {
  expect(length([5, 8, 9])).toBe(3)
})

test("pick", () => {
  expect(pick(2, ['file', 'view'])).toBe('view')
})

test("rempick", () => {
  let n = 3
  let lat = ["coffee", "cup", "tea", "cup", "and", "hick", "cup"]
  let result = lat.filter((el, ind) => ind !== n - 1)
  expect(rempick(n, lat)).toEqual(result)
})

test("noNums", () => {
  let lat = ['string', 3, 'books', '4', 5, 'sunday']
  let result = lat.filter(pipe(isFinite, not))
  expect(noNums(lat)).toEqual(result)
})

test("allNums", () => {
  let lat = ['string', 3, 'books', '4', 5, 'sunday']
  let result = lat.filter(isFinite)
  expect(allNums(lat)).toEqual(result)
})

test("eqan", () => {
  
  expect(eqan(4, 4)).toBe(true)
  expect(eqan('mock', 'mock')).toBe(true)
})

test("occur", () => {
  let a = 'cup'
  let lat = ["coffee", "cup", "tea", "cup", "and", "hick", "cup"]

  expect(occur(a, lat)).toBe(3)
})

test("rempick2", () => {
  let n = 3
  let lat = ["coffee", "cup", "tea", "cup", "and", "hick", "cup"]
  let result = lat.filter((el, ind) => ind !== n - 1)
  expect(rempick2(n, lat)).toEqual(result)
})