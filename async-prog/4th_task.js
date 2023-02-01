import fs from 'fs'

const move = (fileFrom, fileTo, cb) => {
  fs.readFile(fileFrom, 'utf-8', (errorRead, data) => {
    if (errorRead) {
      cb(errorRead)
      return
    }
    fs.writeFile(fileTo, data, (errorWrite) => {
      if (errorWrite) {
        cb(errorWrite)
        return
      }
      fs.unlink(fileFrom, cb)
    })
  })
}


move('./files/test', './files/newfile', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!');
});