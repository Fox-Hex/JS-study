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

export default findIndexOfNearest