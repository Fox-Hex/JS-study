const sameParity = (incArray) => {

    if(incArray[0] % 2 === 0) {
        return incArray.filter((elem) => elem % 2 === 0)
    } else {
        return incArray.filter((elem) => elem % 2 !== 0)
    }
}

export default sameParity