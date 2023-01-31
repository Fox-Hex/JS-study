import fs from 'fs'

const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (_error1, data1) => {
    fs.stat(filepath2, (_error2, data2) => {
      const result = Math.sign(data1.size - data2.size)
      callback(null, result)
    })
  })
}

compareFileSizes('./files/file1', './files/file2', (_err, result) => console.log(result));
compareFileSizes('./files/file1', './files/myfile', (_err, result) => console.log(result));