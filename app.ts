// @ Create a functon which accepts an array in parametrs and removes duplicate items and retrurns array of uniq items
const removeDublicate = (arr: any[]): any[] => {
  const copeArr = arr.slice(0)
  // To finct duplicates we can search in dex og item in an an areray anf then if thats not ther we can push each item to final array
  const finalArr: any = []
  for (let i = 0; i < copeArr.length; i++) {
    const exist = finalArr.indexOf(copeArr[i]) !== -1
    if (!exist) {
      finalArr.push(copeArr[i])
    }
  }

  console.log(finalArr)
}

removeDublicate([1, 2, 3, 3, 1, 2, 6, 7])
