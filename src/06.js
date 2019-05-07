import { isAtom, isEq, isNumber, cons} from './little'
import {head, tail, and} from"ramda"
import {plus, star, power} from './04'
//  determines whether a representation of an arithmetic expression contains only numbers besides the +, x,and t. 
function isNumbered(aexp) {debugger
  return isAtom(aexp)
    ? isNumber(aexp)
    : and(isNumbered(head(aexp)), isNumbered(head(tail(tail(aexp)))))
}

//  returns value of a numbered arithmetic expression. 
function value(nexp) {
  // return isAtom(nexp)
  //   ? nexp
  //   : isEq("+", head(tail(nexp)))
  //     ? plus(value(head(nexp)), value(head(tail(tail(nexp)))))
  //   : isEq("X", head(tail(nexp)))
  //     ? star(value(head(nexp)), value(head(tail(tail(nexp)))))
  //   : isEq("^", head(tail(nexp)))
  //     ? power(value(head(nexp)), value(head(tail(tail(nexp)))))
  //     : undefined
  return isAtom(nexp)
  ? nexp
  : isEq("+", operator(nexp))
    ? plus(value(firstSubEx(nexp)), value(secondSubEx(nexp)))
  : isEq("X", operator(nexp))
    ? star(value(firstSubEx(nexp)), value(secondSubEx(nexp)))
  : isEq("^", operator(nexp))
    ? power(value(firstSubEx(nexp)), value(secondSubEx(nexp)))
    : undefined
}   

function ualue(nexp) {
  return isAtom(nexp)
  ? nexp
  : isEq("+", head(nexp))
    ? plus(ualue(head(tail(nexp))), ualue(head(tail(tail(nexp)))))
  : isEq("X", head(nexp))
    ? star(ualue(head(tail(nexp))), ualue(head(tail(tail(nexp)))))
  : isEq("^", head(nexp))
    ? power(ualue(head(tail(nexp))), ualue(head(tail(tail(nexp)))))
    : undefined
}


function firstSubEx(exp) {
  return head(exp)
}

function secondSubEx(exp) {
  return head(tail(tail(exp)))
}

function operator(exp) {
  return head(tail(exp))
}
export { isNumbered, value, ualue }