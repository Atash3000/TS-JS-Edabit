// Arrays

class MyArray {
  length: number
  data: { [key: number]: string | number }
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index: number) {
    return this.data[index]
  }

  push(item: string | number) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  delete(index: number) {
    const item = this.data[index]
    this.shiftItems(index)
    return
  }

  shiftItems(index: number) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }

  pop() {
    let lastItem: string | number = ''
    let indexToBeDeleted: number = 0
    for (let i = 0; i < this.length; i++) {
      lastItem = this.data[i]

      indexToBeDeleted = i
      // delete this.data[indexToBeDeleted]
      //
    }
    this.delete(indexToBeDeleted)
    this.length--
    return lastItem
  }
}

const newArray = new MyArray()
console.log(newArray.get(0))
newArray.push('hi')
newArray.push('bye')
//newArray.delete(1)
newArray.push('molly')
newArray.push('adam')
newArray.push('ken')

const lastItem = newArray.pop()

console.log(lastItem, 'lastItem')
console.log(newArray)

const string = 'hello'

function reverseString(str: string) {
  const arr = str.split('') // O(n)
  let result = []
  const len = arr.length - 1 // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    result[i] = arr[len - i]
  }
  return result
}
// O(n)
reverseString(string)

const arr = [1, 'v', '3', 'h', 5, 7, true, false, {}];
function findOnlyNumbers(array:any[]) {
  let onlyNumbers:number[] = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'number') {
  onlyNumbers.push(arr[i])
}
  }

  return onlyNumbers
}

findOnlyNumbers(arr)