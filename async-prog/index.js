import fs from 'fs'
import path from 'path'
import async from 'async'
import { clear } from 'console';


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



// const state = {
//   count: 0,
//   result: [],
// }

// const tryWrite = () => {
//   if (state.count !== 2) {
//     return
//   }

//   fs.writeFile('./files/newfile', state.result.join(''), (error3) => {
//     if (error3) {
//       return
//     }
//     console.log('finished!');
//   })
// }

// console.log('first reading');
// fs.readFile('./files/file2', 'utf-8', (error1, data1) => {
//   console.log('first callback');
//   if (error1) {
//     return
//   }
//   state.count += 1
//   state.result[0] = data1
//   tryWrite()
// })

// console.log('second reading');
// fs.readFile('./files/file1', 'utf-8', (error2, data2) => {
//   console.log('second callback');
//   if (error2) {
//     return
//   }
//   state.count += 1
//   state.result[1] = data2
//   tryWrite()
// })



// async.map(['./files/file1', './files/file2'], fs.readFile, (err1, result) => {
//   if (err1) {
//     return
//   }
//   fs.writeFile('./files/newfile', result.join(''), (err2) => {
//     if (err2) {
//       return
//     }
//     console.log('success!');
//   })
// })



// const f = (a) => {console.log(a);}
// setTimeout(f, 300, 5)

// const f = (a, b) => console.log(a + b);
// setTimeout(() => f(1, 4), 500)

// const f = (a, b) => console.log(a + b);
// setTimeout(f.bind(null, 4, 7), 300)

// const id = setInterval(() => console.log(new Date()), 200)
// console.log(id);
// setTimeout(() => { 
//   clearInterval(id)
// }, 1005)

// let counter = 0
// const id = setInterval(() => {
//   counter += 1
//   if (counter === 5) {
//     clearInterval(id)
//   }
//   console.log((new Date()).getHours(), ':', (new Date()).getMinutes(), ':', (new Date()).getSeconds(30));
// }, 1000)
// console.log(id);



const { promises: fsp } = fs // rename fs.promises into fsp

fs.promises.readFile('./files/file1', 'utf-8')
  .then((data1) => console.log(data1))
  .then(() => fs.promises.readFile('./files/file2', 'utf-8'))
  .then((data2) => data2 + ' +something')
  .then((text) => console.log(text))



