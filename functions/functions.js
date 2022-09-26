// 1st task
// const simple = (number) => {
//     if (number < 2) {
//         return false
//     }
//     for (let i = 2; i < number; i += 1) {
//         if (number%i === 0) {
//             return false
//         }
//     }
//     return true
// }
// const define = (num) => {
//     const message = simple(num) ? 'yes' : 'no'
//     console.log(message);
// }
// define(7)








// // ...rest operator (arguments, count - > array)
// const func = (...numbers) => {
//     let result = 0
//     for (const num of numbers) {
//         result += num
//     }
//     return result
// }
// console.log(func(1,2,3,4,5,6,7,8,9));







// 2nd task
// const average = (...numbers) => {
//     if (numbers.length === 0) {
//         return null
//     }
//     const i = numbers.length
//     const sum = _.sum(numbers)
//     return sum/i
// }
// console.log(average(-3,4,2,10))





// // ...spread (array -> arguments count)
// const numbers = [1, 7, 4];
// console.log(...numbers);






// 3rd task
// const convert = (...datesArray) => {
//     const result = []
//     if (datesArray.length === 0) {
//         return result
//     }
//     for (const date of datesArray) {
//         result.push(new Date(...date).toDateString())
//     }
//     return [...result]
// }
// console.log(convert())
// console.log(convert([1993, 3, 24]))
// console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]))







// 4th task
// const run = (text) => {
//   const takeLast = (text, num) => {
//     if (text.length < num || text === "") {
//       return null;
//     }
//     const textArray = text.split("").reverse();
//     const result = [];
//     for (let i = 0; i < num; i += 1) {
//       result.push(textArray[i]);
//     }
//     return result.join("");
//   };
//   return takeLast(text, 4);
// };
// console.log(run(""));
// console.log(run("cb"));
// console.log(run("power"));
// console.log(run("hexlet"));






// 5th task
// const takeOldest = (users, num = 1) => {
//   const sortedUsers = _.sortBy(users, [(users) => Date.parse(users.birthday)])
//   return sortedUsers.slice(0, num)  
// }
// const users = [
//   { name: 'Tirion', birthday: 'Nov 19, 1988' },
//   { name: 'Sam', birthday: 'Nov 22, 1999' },
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
//   { name: 'Sansa', birthday: 'Mar 20, 2001' },
//   { name: 'Tisha', birthday: 'Feb 27, 1992' },
//   { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];
// console.table(takeOldest(users, 2))






// // mapping
// const users = [
//   { name: 'Igor', age: 19 },
//   { name: 'Danil', age: 1 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const names = users.map((user) => user.age)
// console.log(names);

// const numbers = [5, 2, 3];
// const newNumbers = numbers.map((num) => num *2)
// console.log(newNumbers);




// 6th task
// const getChildren = (users) => {
//   const result = []
//   return users.map((user) => user.children).flat(Infinity)
// }

// const users = [
//   {
//     name: 'Tirion',
//     children: [
//       { name: 'Mira', birthday: '1983-03-23' },
//     ],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03' },
//       { name: 'Keit', birthday: '1933-05-14' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [
//       { name: 'Tisha', birthday: '2012-11-03' },
//     ],
//   },
// ];
 
// console.log(getChildren(users))
// // [
// //   { name: 'Mira', birthday: '1983-03-23' },
// //   { name: 'Aria', birthday: '2012-11-03' },
// //   { name: 'Keit', birthday: '1933-05-14' },
// //   { name: 'Tisha', birthday: '2012-11-03' },
// // ];



















