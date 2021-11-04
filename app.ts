//Create a function that takes an arr and returns the sum of the numbers between two "1"s.

function spaceApart(arr: (string|number)[]): number | string {
  let sum = 0 // O(1)
  const index = arr.indexOf('1') // O(n)
  const slicedArr = arr.slice(index) // O(n/2)
  for (let i = 0; i < slicedArr.length; i++) {
    // O(n)
    if (typeof slicedArr[i] === 'number') {
      sum = sum + Number(slicedArr[i])
    }
  }
  return sum > 0 ? sum : 'Invalid';
}
// this function is big O(n) which is Linear time
spaceApart([1, 0, 1, '1', 4, 3, 2, 3, 2, '1']) // ➞ 14
spaceApart(['1', 9, 20, 38, '1']) // ➞ 67
spaceApart([3, 2, 9, '1', 0, 0, -1, '1']) // ➞ "invalid"
