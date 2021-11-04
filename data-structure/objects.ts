// Objects
// Objects in JS are refence types. and arrays and objects are all OBJECTS in JS so all them are reference types

const result = {} === {} // this will return FALSE since our machine creates new memory for each OBJECT with new address and they can never be same so it will return FALSE

const obj1 = { name: 'Kelly' }
let obj2 = { name: 'Kelly' }
const isTheSame = obj1 === obj2 // will return FALSE.

const obj3 = { name: 'BOB' }
const obj4 = obj3
console.log(obj3 === obj4) // will return true since they have same address in the momory
type FunctionReturnType = {
  name: string,
  age: number,
  phone: number,
}
function addNumber(num: number): FunctionReturnType {
  return {
    name: 'Kelly',
    age: 88,
    phone: 3330000,
  }
}

addNumber(10)
