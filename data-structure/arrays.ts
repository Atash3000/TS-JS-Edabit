// Arrays as a data structure

// Array are called Lists in python
const numbers = [1, 2, 3, 4, 5, 6]
// if we need to store data and search for item on array then arrays re best to store data. searching takes O(n) time complexity in worst case.

// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

const strings = ['a', 'b', 'c', 'd', 'e']
// 0    1    2    3    4
// in 32 byte system we taking 4 shelves for each item in an array so we have 5 items in array * 4 shelves each item in memory and total is 20 bytes of storage;

strings[2] // we tell go to array and grab the 3rd item from memory shell and time complexity for this alghorithm is O(1)

strings.push('f') // pushing is O(1) case push adds it at the end of array and array creates an additioal space and new index for the added item to the end;

strings.pop() // time complexity for this alghorithm is O(1) since pop method takes and item from array and array deletes that index and item

strings.unshift('x') // when we add item in front of array it has to movr all other items in array and their indexes must be re assigned so time complexity for this alghoritm is O(n)

strings.splice(2, 0, 'hello') // g we shifted from index 2 and index 0 and 1 is still remaning and big O is O(n/2)  and worst case is O(n)

console.log(strings)

// ! there are two types of arrays
// ! Static arrays
// ! Dymanic arrays
// Static arrays are limited like Tuples in python. It is limited with space and type if data we can store there.

// Dymanic arrays are gets bigger when we add items to them and our machine controls it. and static arrays we manually control them. in dynamic arrays we dont have to allocate memory and machine doea it for us.

// arra.push() method is not rally O(1) it is O(n) cause when we add item to the array machiine copyes previus array and creates new array with additial space and with new mamory adddess and it basicly loops all over items and if we have N items it will take linear time to so this is operation.



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