// const myName = "max"
// let age = 37

// let str_1 = 'hello my name is ' + myName + ', and I am ' + age + ' age old'

// function getAge(){
//     return age
// }

// let str_2= `hello my name is ${myName}, and I am ${getAge()} age old`

// console.log(str_1);
// console.log(str_2);



// const output = `
// <div>this is div</div>
// <p>this is p</p>
// `
// console.log(output);



// const name1 = 'max'

// console.log(name1.length)
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.charAt(1));
// console.log(name1.indexOf('m'));
// console.log(name1.startsWith('m'));
// console.log(name1.toUpperCase().startsWith('M'));
// console.log(name1.repeat(4));

// const string1 = '          pass        '
// console.log(string1);
// console.log(string1.trim());
// console.log(string1.trimEnd());
// console.log(string1.trimStart());



// function logP(s, name, age){
//     console.log(s,name,age)
//     return 'some info'
// }

// n = 'Ivan'
// a = 38

// const outPut = logP `Name:${n}age:${a}`
// console.log(outPut)

// console.log(logP `Name:${n}age:${a}`)



// greet('Max')
// function greet (name2) {
//     console.log('hello', name2);
// }

// const greet2 = function (name2) {console.log('hello', name2);}
// greet2('Max2')

// console.dir(greet2)



// let counter1 = 0
// const interval = setInterval(function(){
//     if (counter1 === 5){
//         clearInterval(interval)
//     } else {
//         console.log(++counter1);
//     }
// },1000)



// arrow functions
// function greet1(name1){
//     console.log('hello -', name1);
// }

// const greet2 = (name1) => {
//     console.log('hello -',name1);
// }

// const greet3 = name1 => console.log('hello -', name1);

// greet1('name1')
// greet2('name2')
// greet3('name3')

// const pow1 = num => num**8
// console.log(pow1(2));



// //parametrs by default
// const sum = (a=1, b=1) => a+b
// console.log(sum());


// function sumAll(...c) {
//     console.log(c);
// }
// sumAll(1,2,3,'text',true,NaN)




// // zamikania
// function createMember(name){
//     return function(lastName){
//         console.log(name+lastName);
//     }
// }
// const a = createMember('Max')
// console.log(a('Bright'));
// console.log(a('Right'));




//arrays

// const cars = ['mazda','ford','kia','skoda']
// const fib = [1,1,2,3,5,8,13,21,34,55]

// cars.push('reno')
// cars.unshift('lada')
// console.log(cars);

// const shiftItem = cars.shift()

// const popItem = cars.pop()

// console.log('shift', shiftItem, 'and pop', popItem)
// console.log(cars);

// a = cars.push(popItem)
// b = cars.unshift(shiftItem)

// console.log('push', a, 'and unshift', b); //?

// console.log(cars);


//arrays

// const cars = ['mazda','ford','kia','skoda']

// console.log(cars);
// console.log(cars.reverse());



// string -> array -> reverse -> string 

// const text = 'hello! how are you?'
// const editText = text.split('').reverse().join('')
// console.log(editText);



// // find index element by text, replace its index text

// const cars = ['mazda','ford','kia','skoda']
// const index2 = cars.indexOf('kia')
// console.log(cars[index2]);
// cars[index2] = 'porsche'
// console.log(cars);



// find object in array

// const customers = [
//     {name: 'Ann', balance: 12500},
//     {name: 'Paul', balance: 5600},
//     {name: 'Mike', balance: 24700},
// ]
// const index = customers.findIndex(function(a){
//     return a.balance === 5600
// })
// console.log(customers[index]);




[]
// find object in array with cycle
// const customers = [
//     {name: 'Ann', balance: 12500},
//     {name: 'Paul', balance: 5600},
//     {name: 'Mike', balance: 24700},
// ]
// for (const i of customers) {
//     if (i.balance === 24700)
//     findPers = i
// }
// console.log(findPers);    


// find object in array with .find =>
// const customers = [
//     {name: 'Ann', balance: 12500},
//     {name: 'Paul', balance: 5600},
//     {name: 'Mike', balance: 24700},
// ]

// const findPers1 = customers.find((a) => {
//     return a.balance === 24700
// })
// console.log(findPers1);

// const findPers2 = customers.find(a => a.balance === 5600)
// console.log(findPers2);





// change each array element with .map
let cars = ['mazda','kia','skoda']

console.log(cars.includes('kia'))

const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars);

cars = cars.map(car => {
    return car.toLocaleUpperCase()
})
console.log('this is first array',cars);

const editCars = cars.map(i => i +' - new')
console.log(editCars);

const 




