import fs from 'fs'



// const callback = (error, data) => {console.log(data);}
// const content = fs.readFile('./files/test', 'utf-8', callback)
// console.log(content);



// fs.readFile('./files/test', 'utf-8', (_error, data) => {console.log('1');})
// fs.readFile('./files/test', 'utf-8', (_error, data) => {console.log('2');})
// console.log('3');



// const noop = (_error, data) => {return data}
// const content = fs.readFile('./files/test', 'utf-8', noop)
// console.log(content);



// const content = fs.readFile('./files/test', 'utf-8', (_error, data) => {
//   if (data === '') {
//     return
//   }
// })
// console.log(content);



// const readFileWithTrim = (filepath, cb) => {
//   fs.readFile(filepath, 'utf-8', (_error, data) => {
//     cb(null, data.trim());
//   });
// };
// const callback = (_error, data) => console.log(data)
// readFileWithTrim('./files/test', callback)



fs.readFile('./files/file1', 'utf-8', (_error1, data1) => {
  fs.readFile('./files/file2', 'utf-8', (_error2, data2) => {
    fs.writeFile('./files/newfile', `${data1}${data2}`, (_error3) => {
      if (_error3) throw _error3
      console.log('write success!');
    })
  })
})

