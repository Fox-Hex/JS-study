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





// delete nulls from array by creating new array
const compact = (incArray) =>{
    const result = []

    for (const item of incArray) {
        if (item !== null) {
            result.push(item)
        }
    }

    return result
}
const a = [3,5,null,4,null]
console.log(a);
console.log(compact(a));


























