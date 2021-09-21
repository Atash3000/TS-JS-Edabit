// Data Structure arrays
const arr = ['a', 'b', 'c', 'd']
console.log(arr)

const c = arr[2]
arr.push('e') // # Big O(1)
arr.pop() // # Big O(1)
// @ We saying go to last index and simple remove item
arr.unshift('x') // # 'x' has been added to the begginig of array. Big O(n^2)
// # to add an item beginnig of array we structured these indexes.
arr.splice(3, 0, 'ZZ') // # go to index of 1 and delete 0 and add 'ZZ'
// # Big O(n/2) for slice jsince we added in the middle of array and item. So it is itirationg half array;
// ? deleting  & inserting to an array is not optiomal way. Big O(n) (linear time)

// ? Static arrays --> like Tulps, we have limited memory and type
// ? Dinamic arrays --> allow us to copy for new location in memory;

type Tulp = [number, number, number, number] //# --> Static array example
const myStaticArr: Tulp = [5, 5, 7, 8]

//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

//Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
//You cannot move backward (which is why example #3 doesn't work).
//If you are already on the same tile, return false, as you would be advancing away.
//Expect only positive integer inputs.

function possibleBonus(a: number, b: number): boolean {
  return true
}
possibleBonus(3, 7) // ➞ true

possibleBonus(1, 9) //➞ false

possibleBonus(5, 3) // ➞ false

//Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

type OperatorType = '/' | '+' | '*' | '-'

function calculator(
  num1: number,
  operator: OperatorType,
  num2: number
): number | undefined {
  switch (operator) {
    case '*':
      return num1 * num2
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '/':
      return num1 / num2
    default:
      return undefined
  }
}
calculator(2, '+', 2) // ➞ 4

calculator(2, '*', 2) // ➞ 4

calculator(4, '/', 2) // ➞ 2

//Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.
//"flick" will always be given in lowercase.

type Combined = number | string
function flickSwitch(arr: Combined[]): Boolean[] {
  let result: Boolean[] = []
  for (let i = 0; i < arr.length; i++) {
    const itemCount: number = arr.length
    const index: number = arr.indexOf('flick') + 1

    if (arr[i] === 'flick') {
      const idn = (arr[index] = false)

      result.push(false)
      result.push(idn)
    } else {
      // result.push(true)
    }
  }

  return result
}
console.log(flickSwitch(['edabit', 'flick', 'eda', 'bit'])) //➞ [true, false, false, false]
flickSwitch(['flick', 11037, 3.14, 53]) // ➞ [false, false, false, false]
