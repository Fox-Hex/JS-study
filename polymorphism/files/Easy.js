class Easy {
  turn(field) {
    let placeMark = false
    field.forEach((row, iRow) => {
      row.forEach((cell, iCell) => {
        if(placeMark === true) {
          return
        }
        if(cell === null) {
          field[iRow][iCell] = 'o'
          placeMark = true
        }
      })
    })
  }
}

export default Easy;
