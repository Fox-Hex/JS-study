import fs from 'fs'
import path from 'path'


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



// fs.readFile('./files/file1', 'utf-8', (_error1, data1) => {
//   fs.readFile('./files/file2', 'utf-8', (_error2, data2) => {
//     fs.writeFile('./files/newfile', `${data1}${data2}`, (_error3) => {
//       if (_error3) throw _error3
//       console.log('write success!');
//     })
//   })
// })



// const getFileOwner = (dirpath) => {
//   const files = fs.readdirSync(dirpath)
//   return files
//     .map((fname) => [fname, fs.statSync(path.join(dirpath, fname))])
//     .map(([fname, stats]) => ({filename: fname, size: stats.size}))
// }
// console.log(getFileOwner('./files'))



// const getFileOwners = (dirpath, callback) => {
//   fs.readdir(dirpath, (_error1, filenames) => {
//     const readFileStat = (items, result = []) => {
//       if (items.length === 0) {
//         callback(null, result)
//         return
//       }
//       const [first, ...rest] = items
//       const filepath = path.join(dirpath, first)
//       fs.stat(filepath, (_error2, stat) => {
//         readFileStat(rest, [...result, {filename: first, owner: stat.uid}])
//       })
//     }
//     readFileStat(filenames)
//   })  
// }
// getFileOwners('./files', (_error, data) => console.log(data))



// try {
//   fs.readFile('./files', 'utf-8', () => {
//     callUndefinedFunction()
//   })
// } catch (e) {
//   console.log('errrrrrrooooor');
// }



// fs.readFile('./files', 'utf-8', (error, data) => {
//   if (error) {
//     console.log('error...');
//     return;
//   }

//   console.log('success!');
// })



// fs.readFile('./files/file1', 'utf-8', (error1, data1) => {
//   if (error1) {
//     console.log('error in file1');
//     return
//   }
//   fs.readFile('./files/file2', 'utf-8', (error2, data2) => {
//     if (error2) {
//       console.log('error in file2');
//       return
//     } 
//     fs.writeFile('./files/newfile', `${data1}${data2}`, (error3) => {
//       if (error3) {
//         console.log('error during writing');
//         return
//       }
//       console.log('success!');
//     })
//   })
// })



// const unionFiles = (path1, path2, outpath, cb) => {
//   fs.readFile(path1, 'utf-8', (error1, data1) => {
//     if (error1) {
//       cb(error1)
//       return
//     }
//     fs.readFile(path2, 'utf-8', (error2, data2) => {
//       if (error2) {
//         cb(error2)
//         return
//       }
//       fs.writeFile(outpath, `${data1}${data2}`, cb)
//     })
//   })
// }
// unionFiles('./files/file1', './files/file2', './files/newfile', (error) => {console.log(error);})

