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
