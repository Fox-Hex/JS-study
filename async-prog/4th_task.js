import fs from 'fs'

const move = (fileFrom, fileTo, cb) => {
  fs.readFile(fileFrom, 'utf-8', (errorRead, data) => {
    cb(errorRead)
    fs.writeFile(fileTo, data, (errorWrite) => {
      cb(errorWrite)
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