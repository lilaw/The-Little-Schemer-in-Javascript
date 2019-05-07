import { isNull, isEq } from "./little";
// It takes an atom and a lat as its arguments,
// and makes a new lat with the first occurrence
// of the atom in the old lat removed.
function rember(a, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return [];
  if (isEq(a, first)) return rest;
  return [first, ...rember(a, rest)];
}

// builds another list composed of the first S-expression of each internal list.
function firsts(l) {
  let [foremost, ...rest] = l;
  if (isNull(foremost)) return [];
  return [...foremost.slice(0, 1), ...firsts(rest)];
}

// return new list inserted to the right of the first occurrence of old
function insertR(fresh, old, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return [];
  if (isEq(old, first)) return [old, fresh, ...rest]
  return [first, ...insertR(fresh, old, rest)]
}

function insertL(fresh, old, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return [];
  if (isEq(old, first)) return [fresh, lat]
  return [first, ...insertR(fresh, old, rest)]
}

// subst replaces the first occurrence of old in the lat with new
function subst(fresh, old, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return [];
  if (isEq(old, first)) return [fresh, ...rest]
  return [first, ...subst(fresh, old, rest)]
}

// subst2 replaces either the first occurrence of o1 or the first occurrence of o2 by new 
function subst2(fresh, o1, o2, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return [];
  if (isEq(o1, first) || isEq(o2, first)) return [fresh, ...rest]
  return [first, ...subst2(fresh, o1, o2, rest)]
}

// multirember remove  all occurrences a 
function multirember(a, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return []
  if (isEq(a, first)) return multirember(a, rest)
  return [first, ...multirember(a, rest)]

}

function multiinsertR(fresh, old, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return []
  if (isEq(old, first)) return [old, fresh, ...multiinsertR(fresh, old, rest)]
  return [first, ...multiinsertR(fresh, old, rest)]
}

function multiinsertL(fresh, old, lat) {
  let [first, ...rest] = lat;
  if (isNull(first)) return []
  if (isEq(old, first)) return [fresh, old, ...multiinsertL(fresh, old, rest)]
  return [first, ...multiinsertL(fresh, old, rest)]
}

function multisubst(fresh, old, lat) {
  let [first, ...rest] = lat;
  if (isEq(old, first)) return [fresh, multisubst(fresh, old, rest)]
  return [first, ...multisubst(fresh, old, rest)]
}
export { rember, firsts, insertR, insertL, subst, subst2, multirember, multiinsertR, multiinsertL, multisubst};
