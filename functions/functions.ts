// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.;

//1) Create InterFace for return type of Factory function;

interface Ifunction {
  (b: number): number
}
function makePlusFunction(baseNum: number): Ifunction {
  return function a(val: number) {
    return val + baseNum
  }
}
const plus7 = makePlusFunction(7)
plus7(5) //# output : 12

//@------------------------------NEXT----------------------------@//
// Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function greetingMaker(str: string) {
  function closure(name: string) {
    return str + ',' + name
  }
  return closure
}

const greeting = greetingMaker('Hello')
greeting('James') //➞ "Hello, James"
