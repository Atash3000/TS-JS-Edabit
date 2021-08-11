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
//
