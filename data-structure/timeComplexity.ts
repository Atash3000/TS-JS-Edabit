// Algorithms and data structures

//@ Big O noation for Time complexity
// Time Complexity

function boooo(n: number[]) {
  for (let i = 0; i < n.length; i++) {
    console.log('boooo')
  }
}

boooo([1, 2, 3, 4, 5]) // space complexity O(1)
// when we talk about Time complexity we think about additial. we dont care what and how large  input is.

function arrayOfNTimes(n: number) {
  const numArr = Array.from(Array(n).keys())
  let number = 1
  let arr: string[] = [] // O(n)
  for (let i = 1; i < numArr.length / 40 + 1; i++) {
    arr.push('chapter ' + number++)
  }
  console.log(arr)
}

arrayOfNTimes(200) // TC is O(n)
