class Normal {
  turn(field) {
    let placeMark = false
    field.reduceRight((prev, row, iRow) => {
      row.forEach((cell, iCell) => {
        if(placeMark === true) {
          return
        }
        if(cell === null) {
          field[iRow][iCell] = 'o'
          placeMark = true
        }
      })
    }, 0)
  }
}

export default Normal;
