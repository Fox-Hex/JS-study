// // definition
// const items = []
// const numbers = [1,2,3,4,5]

// // using .at() for array index, can use -1 for last element
// console.log(numbers.at(0));



// //1st task
// const getWeekends = (parametr = 'long') => {
//     const longNames = ['saturday', 'sunday']
//     const shortNames = ['sat', 'sun']
//     if (parametr === 'long') {
//       return longNames
//     } else if (parametr === 'short') {
//       return shortNames
//     } else {
//       return
//     }
// }
// console.log(getWeekends());



// // array changing

// const animals = ['cat', 'dog', 'mouse', 'frog']
// console.log(animals);

// animals.push('horse')
// console.log(animals);

// animals.unshift('bird')
// console.log(animals);

// animals[7] = 'fish'
// console.log(animals);

// delete animals[3]
// console.log(animals);





// // 2nd task

// const swap = (incArray) => {
//     if (incArray.length <= 1) {
//       return incArray
//     } else {
//         const lastElem = incArray.at(-1)
//         incArray[incArray.length-1] = incArray[0]
//         incArray[0] = lastElem
//         return incArray
//     }
// }

// const a = [1,2,3,4,5]
// console.log(swap(a));




// // 3rd task

// export default (incArray, index, deF = null) => {
//     if ((index < incArray.length) && (index >= 0)) {
//       return incArray[index];
//     }
//     return deF;
//   };




// cycle for arrays
// const userNames = ['petya', 'vasya', 'evgeny'];
// for (let i = 0; i < userNames.length; i += 1) {
//     console.log(userNames[i]);
// }

// edit array
// const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];
// console.log(emails);
// for (i = 0; i < emails.length; i +=1) {
//     emails[i] = emails[i].toLowerCase()
// }
// console.log(emails);




// // 4th task

// export default addPrefix = (names, prefix) => {
//     const newNames = [];
//     for (let i = 0; i < names.length; i += 1) {
//       newNames[i] = `${prefix} ${names[i]}`;
//     }
//     return newNames;
//   };



// array compare and change

// const items = ['one','two','three']
// const items2 = items

// items2.push('four')

// console.log(items);
// console.log(items2);
// console.log(items === items2); //true

// console.log([1,2,3]===[1,2,3]); //false

// console.log(items.pop());
// console.log(items);

// items.sort()
// console.log(items);

// items.reverse()
// console.log(items);

// const a = [1,2,3]
// const b = [4,5,6]
// const c = a.concat(b)
// console.log(c);




// // 5th task

// const reverse = (incArray) => {    
//     const newArray = []
//     for (let i=0; i < incArray.length; i += 1) {
//         newArray[i] = incArray[i]
//     }
//     for (let i=0; i < incArray.length; i += 1) {
//       incArray[i] = newArray[incArray.length-1-i]
//     }
// }

// const names = ['john', 'smith', 'karl'];
// reverse(names)
// console.log(names);






// // find max
// const takeMax = (incArray) => {
//     if (incArray.length === 0) {
//         return null
//     }
//     let max = incArray[0]
//     for (let i = 1; i < incArray.length; i += 1) {
//         if (incArray[i] > max) {
//             max = incArray[i]
//         }
//     }
//     return max
// }
// console.log(takeMax([1,8,6,3,3]));



// // find sum
// const takeSum = (incArray) => {
//     let sum = 0
//     for (let i = 0; i < incArray.length; i += 1) {
//         sum += incArray[i]
//     }
//     return sum
// }
// console.log(takeSum([1,2,8,3]));



// 6th task
// calcSum = (incArray) => {
//     if (incArray.length === 0) {
//       return 0
//     }
//     let sum = 0
//     for (let i = 0; i < incArray.length; i +=1) {
//       if (incArray[i] % 3 === 0) {
//         sum += incArray[i]
//       }
//     }
//     return sum
// }
// console.log(calcSum([1,2,3,4,5,6,7,8,9])); //sum every elem tha divide by 3



// // for of...
// const userNames = ['petya', 'vasya', 'evgeny'];
// for (const name of userNames) {
//     console.log(name);
// }

// const numbers = [10,10,20]
// let sum = 0
// for (const num of numbers) {
//     sum += num
// }
// console.log(sum);





//7th task
// const calculateAverage = (temperature) => {
//     if (temperature.length === 0) {
//       return null
//     }
//     let sum = 0
//     for (const temp of temperature) {
//       sum += temp
//     }
//     const mid = sum / temperature.length
//     return mid
// }
// console.log(calculateAverage([1,2,3,4,5]));





// // delete nulls from array by creating new array
// const compact = (incArray) =>{
//     const result = []

//     for (const item of incArray) {
//         if (item !== null) {
//             result.push(item)
//         }
//     }

//     return result
// }
// const a = [3,5,null,4,null]
// console.log(a);
// console.log(compact(a));





// 8th task
// const getSameParity = (incArray) => {
//   const newArray = []
//   if (incArray === []) {
//     return newArray
//   }
//   for (const num of incArray) {
//     if (Math.abs(num) % 2 === 0 && Math.abs(incArray[0]) % 2 === 0) {
//       newArray.push(num)
//     }
//     if (Math.abs(num) % 2 !== 0 && Math.abs(incArray[0]) % 2 !== 0) {
//       newArray.push(num)
//     }
//   }
//   return newArray
// }
// console.log(getSameParity([2,5,6,3,3,9,1,0]));




// 9th task
// getTotalAmount = (money, currency) => {
//   let sum = 0
//   for (const position of money) {
//     if (position.slice(0,3) !== currency) {
//       continue
//     }
//     sum += Number(position.slice(4))
//   }
//   return sum
// }
// console.log(getTotalAmount(['eur 10', 'rub 10', 'eur 100', 'rub 200'],'rub'));




// array inside array
// const array1 = [
//   1,
//   [6,7],
//   [4,[3,2]]
// ]
// console.log(array1[2][1][0], array1[2][1].length);

// x,o check
// const field = [
//   [null,null,null],
//   [null,null,null],
//   [null,null,null]
// ]
// field[1][2] = 'x'
// console.log(field);
// const checkField = (field, symbol) => {
//   for (const row of field) {
//     if (row.includes(symbol)) {
//       return true
//     }
//   }
//   return false
// }
// console.log(checkField(field, 'x'));




// 9th task
// export default getSuperSeriesWinner = (table) => {
//   let winsUssr = 0
//   let winsCanada = 0
//   for (const match of table) {
//     if (match[0] > match[1]) {
//       winsCanada += 1
//     } else if (match[0] < match[1]) {
//       winsUssr += 1
//     }
//   }
//   if (winsCanada > winsUssr) {
//     return 'canada'
//   }
//   if (winsCanada < winsUssr) {
//     return 'ussr'
//   }
//   return null
// }




// using join() to make string from array
// const buildHTML = (incArray) => {
//   const parts =[]
//   for (const item of incArray) {
//     parts.push(`<li>${item}</li>`)
//   }
//   const a = parts.join('')
//   return `<ul>${a}</ul>`
// }
// console.log(buildHTML(['a','b','c']));

// const parts = ['js', 'php', 'html']
// console.log(parts.join('\n'));



// 10th task
// const buildDefinitionList = (list) => {
//   if (list.length === 0) {
//     return ''
//   }
//   const result = []
//   for (const row of list) {
//     result.push(`<dt>${row[0]}</dt><dd>${row[1]}</dd>`)
//   }
//   return `<dl>${result.join('')}</dl>`
// }
// a = [
//   ['1', 'abc'],
//   ['2', 'def']
// ]
// console.log(buildDefinitionList(a));





// split string into array, modify and join into string - .split() .join()
// const capitalize = (text) =>
//   (text.length === 0) ? text : `${text[0].toUpperCase()}${text.slice(1)}`

// const capitalizeWords = (sentence) => {
//   const words = sentence.split(' ')
//   const result = []
//   for (const word of words) {
//     result.push(capitalize(word))
//   }
//   return result.join(' ')
// }

// console.log(capitalizeWords('das sd as asd sd'));





// 11th task
// const makeCensored = (incSentence, stopWords) => {
//   const result = []
//   const words = incSentence.split(' ')
//   for (const word of words) {
//     (stopWords.includes(word)) ? result.push('$#%!') : result.push(word)
//   }
//   return result.join(' ')
// }
// const a = 'Have a big house, but small finger'
// console.log(makeCensored(a,['big', 'small']));






// flatten array with inner cycle
// const flatten = (incArray) => {
//   const result =[]
//   for (const item of incArray) {
//     if (Array.isArray(item)) {
//       for (const subItem of item) {
//         result.push(subItem)
//       }
//     } else {
//     result.push(item)
//     }
//   }
//   return result
// }
// const a = [1,2,[3,4],1,8,[4]]
// console.log(flatten(a));














