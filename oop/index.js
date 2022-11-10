// console.log('hello'.toUpperCase());


// const company = {name:'BMW'}
// company.getName = function() {
//   return 'something'
// }
// console.log(company.getName());


// const obj = {
//   getName: function() {
//     return 'text'
//   }
// }
// console.log(obj.getName());


// const company2 = {name:'KIA'}
// function getKIA() {
//   return 'KIA'
// }
// company2.getNameKia = getKIA
// console.log(company2.getNameKia());




// const car = {name:'KIA'}

// car.getName = function getName() {
//   return this.name
// }

// console.log(car.getName());

// car.setName = function setName(newName) {
//   this.name = newName
// }

// car.setName('Mercedess')
// console.log(car.getName());



// const company3 = {employees:[]}
// console.log(company3);

// company3.addEmployee = function(user) {
//   this.employees.push(user)
// }

// company3.addEmployee({name:'vasya'})
// console.log(company3);



// const company4 = {name:'bmw', getCompName: function (){return this.name}}
// const company5 = {name:'kia'}
// console.log(company5);

// company5.getCompName = company4.getCompName

// console.log(company5.getCompName());

// console.log(company5);



// const sayHi = () => 'hi'
// console.log(sayHi())
// console.log(sayHi.call())



// const getName2 = function () {
//   return this.name
// }

// const company6 = {name:'VW'}

// console.log(getName2(company6));
// console.log(getName2.call(company6));



// const company = {
//   name: 'Hexlet',
//   country: {
//     name: 'Finland',
//     getName: function getName() {
//       return this.name;
//     }
//   },
// };
// console.log(company.country.getName());



// const company7 = {
//   name: 'GMC',
//   getName() {
//     return this.name
//   }
// }
// console.log(company7.getName());





// const printer = {
//   name: 'Fox',
//   print(greeting = 'Hi!') {
//     console.log(`${greeting}, ${this.name}`);
//   }
// }

// printer.print()

// setTimeout(printer.print, 1000)

// setTimeout(() => printer.print(), 2000)

// const boundPrint = printer.print.bind(printer)
// setTimeout(boundPrint, 3000)

// setTimeout(printer.print.bind(printer, 'Hello!!!'), 4000)


// const print = printer.print

// print.apply(printer, ['changed argument'])
// print.call(printer, 'changed argument')


// const numbers = [2,3,6,2,8,9]
// const max = Math.max.apply(null, numbers)
// console.log(max);
// const max2 = Math.max.call(null, ...numbers)
// console.log(max2);


// const sum = (a, b) => a-b
// console.log(sum.bind(null, 4)(2));




// const f1 = () => {
//   console.log(this);
// }
// f1()

// function f2() {
//   console.log(this);
// }
// f2()

// const obj = {f1, f2}
// obj.f1() // arrow function
// obj.f2() // common function

// f1.bind({ name: 'max'})()
// f1.call({ name: 'max'})

// f2.bind({ name: 'max'})()
// f2.call({ name: 'max'})


// const company = {
//   f1: () => {
//     console.log(this);
//   },
//   f2() {
//     console.log(this);
//   }
// }
// company.f1()
// company.f2()


// const printer = {
//   items: [1],
//   print() {
//     this.items.forEach(() => console.log(this.items)) // context - print()
//   }
// }
// printer.print()

// const printer2 = {
//   items: [1],
//   print() {
//     this.items.forEach(function () {console.log(this.items)}) // context - empty
//   }
// }
// printer2.print()



// const user = {
//   age: 45,
//   getAge: () => {
//     return this.age;
//   },
// };
// console.log(user.getAge()); // error



// (() => console.log('ehlo')).apply()

// console.log( (() => 'call method').call() )
// console.log( (() => 'apply method').apply() )
// console.log( (() => 'bind method').bind()() )



// Abstraction

// const make = (name, website) => {
//   return { name, website };
// };
// const getName = (company) => company.name;
// const getWebsite = (company) => company.website;
// const company = make('FoxHex', 'fox-hex.org');
// console.log(getName(company));



// Incapsulation

// function getName() {
//   return this.name;
// };
// function getWebsite() {
//   return this.website;
// };
// const make = (name, website) => {
//   return {
//     name,
//     website,
//     getName,
//     getWebsite,
//   };
// };
// const company = make('FoxHex', 'foxhex.io')
// console.log(company.getName());
// console.log(company.getWebsite());



// operator 'new'

// function getName() {
//   return this.name;
// };
// function getWebsite() {
//   return this.website;
// };
// function Company(name, website) {
//   this.name = name;
//   this.website = website;
//   this.getName = getName;
//   this.getWebsite = getWebsite;
// }
// const company = new Company('fox', 'fox.io')
// console.log(company.getName());
// console.log(company.getWebsite());




// prototype

// const date = new Date()
// console.log(Date);
// console.log(Object.getPrototypeOf(date));

// console.log(Object.getPrototypeOf([1,2]));


// function Company(name) {
//   this.name = name
// }

// const comp = new Company('foo')
// console.log(comp);

// Company.prototype.getName = function () {
//   return this.name
// }

// const comp2 = new Company('foo')
// console.log(comp2.getName());

// Array.prototype.map = function () {
//   return 'woohoo!'
// }
// console.log([1,2].map())




function some() {
}
some.valueOf = () => 5
console.log(some == 5);

const obj = {}
obj.valueOf = () => 5
console.log(obj == 5);

