import fs from 'fs'

const reverse = (filepath) => {
  return fs.promises.readFile(filepath, 'utf-8')
    .then((text) => text.split('\n').reverse().join('\n'))
    .then((data) => fs.promises.writeFile(filepath, data))
}

console.log(reverse('./files/newfile'));