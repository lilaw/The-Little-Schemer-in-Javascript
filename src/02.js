import { isAtom, isNull, isEq } from "./little";


function lat(list) {
  let [first, ...rest] = list;
  if (isNull(first)) return true;
  if (isAtom(first)) return lat(rest);
  return false;
}

// is 'a' a member of list? 
function member(a, list) {
  let [first, ...rest] = list;
  if (isNull(first)) return false;
  
  return isEq(a, first) || member(a, rest)
}
export { lat, member };



