const findIndexOfNearest = (arrayNumbers, searchItem) => {
    if(arrayNumbers.length === 0) {
        return null
    }
    const difference = arrayNumbers
        .map((elem) => Math.abs(elem - searchItem))
        .reduce((iMin, elem, index, array) => {
            return (elem < array[iMin] ? index : iMin)
        }, 0)
    return difference
}

console.log(findIndexOfNearest([], 2))              // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0))  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4))    // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)) // 2
