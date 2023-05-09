import Easy from './files/Easy.js';
import Normal from './files/Normal.js';

class TicTacToe {
  constructor(difficulty = 'easy') {
    if (difficulty === 'normal') {
      this.difficulty = new Normal
    } else if (difficulty === 'easy') {
      this.difficulty = new Easy
    }
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    this.gameOver = false
  }

  go(row = '', column = '') {
    if (row === '' && column === '') {
      this.difficulty.turn(this.field)
      this.winCheck()
      return this.gameOver
    } else {
      if (this.field[row][column] === null) {
        this.field[row][column] = 'x'
        this.winCheck()
        return this.gameOver
      } else {
      }
    }
  }

  winCheck() {
    const i = this.field
    if(i[0][0] !== null && i[0][0] === i[1][1] &&i[0][0] === i[2][2]) this.gameOver = true
    if(i[2][0] !== null && i[2][0] === i[1][1] &&i[2][0] === i[0][2]) this.gameOver = true

    if(i[0][0] !== null && i[0][0] === i[0][1] &&i[0][0] === i[0][2]) this.gameOver = true
    if(i[1][0] !== null && i[1][0] === i[1][1] &&i[1][0] === i[1][2]) this.gameOver = true
    if(i[2][0] !== null && i[2][0] === i[2][1] &&i[2][0] === i[2][2]) this.gameOver = true
    if(i[0][0] !== null && i[0][0] === i[1][0] &&i[0][0] === i[2][0]) this.gameOver = true
    if(i[0][1] !== null && i[0][1] === i[1][1] &&i[0][1] === i[2][1]) this.gameOver = true
    if(i[0][2] !== null && i[0][2] === i[1][2] &&i[0][2] === i[2][2]) this.gameOver = true
  }
}

const game = new TicTacToe('normal')
console.log(game.go())
console.log(game.go(1, 1))
console.log(game.go())
console.log(game.go(2, 2))
console.log(game.go())
console.log(game.go(0, 0))

