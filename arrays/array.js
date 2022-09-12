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




// 5th task

const reverse = (incArray) => {
    const newArray = []
    for (let i=0; i < incArray.length; i += 1) {
      newArray[i] = incArray[incArray.length-1-i]
    }
    return newArray
}
const names = ['john', 'smith', 'karl'];
console.log(reverse(names));

























