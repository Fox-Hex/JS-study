const print = (message) => {
  console.log(message);
};

//objects init and access
// const user = { name: "vasa", age: 25 };
// const rectangle = { width: 100, height: 120 };

// const user2 = {
//   name: "petya",
//   age: 30,
//   married: true,
// };

// a = user2.name;
// b = user2["married"];

// let prop = "age";
// c = user2[prop];

// console.log(a);
// console.log(b);
// console.log(c);

// modification
// const user = { name: "bob", age: 45, married: true };

// user.age = 35;
// print(user.age);

// user["married"] = false;
// print(user.married)

// const newObject = {}
// print(newObject)
// newObject.name = 'Hello world'
// newObject.type = 'project'
// newObject.status = false
// print(newObject)
// delete newObject.type
// print(newObject)





// 2nd task
// const normalize = (incObject) => {
//     incObject.name = _.capitalize(incObject.name)
//     incObject.description = incObject.description.toLowerCase()
// }

// const lesson = {
//     name: 'ДеструКТУРИЗАЦИЯ',
//     description: 'каК удивитЬ друзей',
//   };
// normalize(lesson);
// console.log(lesson);




// links, comparison

// const company = {name:'power'}
// print(company === {name:'power'}) //false
// print({} === {}) //false

// const company2 = company
// print(company === company2) //true

// company.name = 'boom'
// print(company) //same
// print(company2) //same

// const changeObj = (o) => {
//   o.key = 23
// }
// const obj = {}
// changeObj(obj)
// print(obj)




// 3rd task
// is = (company1, company2) => {
//   for (const key of ['name', 'state', 'website']) {
//     if (company1[key] !== company2[key]) {
//       return false
//     }
//   }
//   return true
// }


// objects in motion
// const filepath = "/path/to/index.js";
// const getFileInfo = (filepath) => {
//   const parts = filepath.split("/");
//   const fileName = _.last(parts);
//   const fileExt = _.last(fileName.split("."));
//   const result = { extension: fileExt, filename: fileName };
//   return result;
// };
// print(getFileInfo(filepath));


// const firstname = 'ivan'
// const age = 34
// const married = true
// const info1 = {firstname: firstname, age: age, married: married}
// const info2 = {firstname, age, married} // short version if param name === variable
// print(info1)
// print(info2)





// 4th task
// const getDomainInfo = (incLink) => {
//   const result = {}
//   const parts = incLink.split('://')

//   if (incLink.startsWith('https:')) {
//     result.scheme = 'https'
//     result.name = _.last(parts)
//   } else if (incLink.startsWith('http:')) {
//     result.scheme = 'http'
//     result.name = _.last(parts)
//   } else {
//     result.scheme = 'http'
//     result.name = incLink
//   }
  
//   return result
// }

// print(getDomainInfo('yandex.ru'))




// check property exist
// const car = {
//   mark: 'kia',
//   model: 'cerato',
//   type: 'sedan',
// }
// print(car['year'] === undefined)
// print(Object.hasOwn(car, 'year'))

// const bag = [
//   'apple', 'banana', 'pear',
//   'apricot', 'apple', 'banana',
//   'apple', 'orange', 'pear',
// ];

// const countFruits = (fruits) => {
//   const result = {}
//   for (const item of fruits) {
//     if (result[item] === undefined) {
//       result[item] = 1
//     } else {
//       result[item] += 1
//     }
//   }
//   return result
// }
// print(countFruits(bag))

// const countFruits2 = (fruits) => {
//   const result = {}
//   for (const item of fruits) {
//     if (Object.hasOwn(result, item)) {
//       result[item] += 1
//     } else {
//       result[item] = 1
//     }
//   }
//   return result
// }
// print(countFruits2(bag))


// Nullish_coalescing_operator - (value) ?? (value if left part null/undefined)
// const person = {name: 'mark', age: 45}

// print(person.sex ?? 'male')
// print(person.age ?? 25)
// print(person.name ?? 'unknown')





// 5th task
// const countWords = (text) => {
//   const wordS = _.words(text.toLowerCase())
//   const result = {}
//   for (const word of wordS) {
//     if (Object.hasOwn(result, word)) {
//       result[word] += 1
//     } else {
//       result[word] = 1
//     }
//   }
//   return result
// }
// const text2 = 'oNe another one with strange Words words';
// print(countWords(text2))




// Object.value()
// Object.keys()
// Object.entries()

// // cycle using for...in
// const user = { name: "bob", age: 45, married: true };

// for (const prop in user) {
//   print(`${prop} = ${user[prop]}`)
// }

// // cycle using Object.keys()
// const keys = Object.keys(user)
// for (const key of keys) {
//   print(key)
// }

// // cycle using Object.values()
// const values = Object.values(user)
// for (const value of values) {
//   print(value)
// }

// // cycle using Object.entries()
// const entries = Object.entries(user)
// print(entries)

// for (const [key, value] of entries){
//   print(`${key} : ${value}`)
// }



// find key by value
// const findKeys = (incObject, expValue) => {
//   const result =[]
//   const entries = Object.entries(incObject)

//   for (const [key, value] of entries) {
//     if (value === expValue) {
//       result.push(key)
//     }
//   }

//   return result
// }

// const lessonMembers = {
//   syntax: 3,
//   using: 2,
//   foreach: 10,
//   operations: 10,
//   destructuring: 2,
//   array: 2,
// };
// print(findKeys(lessonMembers, 10))






// 6th task
// const pick = (data, props) => {
//   const result = {}
//   const entries = Object.entries(data)
//   for (const [key, value] of entries) {
//     if (props.includes(key)) {
//       result[key] = value
//     }
//   }
//   return result
// }

// const data = {
//   user: 'ubuntu',
//   cores: 4,
//   os: 'linux',
// };
// print(pick(data, ['user', 'something']))




// embeded objects
// const user = { name: 'Vasya', married: true, age: 25 };

// user.friends = ['bob', 'mark']
// user.children = [
//   {name:'anna', age: 1},
//   {name:'fil', age: 7},
// ]
// user.company = {name:'gasprom'}

// print(user)
// print(user.friends[1])
// print(user.children[0].name)
// print(user.company)

// print(JSON.stringify(user, null, '---')) // convert output to JSON like file


// operator .?
// const obj = {}
// print(obj?.one?.two?.three)
// print(obj?.one?.two?.three ?? 'default value') // with nulish coales. operator


// using _.get() 
// const user = {
//   children: [
//     { name: 'Mila', age: 1 },
//     { name: 'Petr', age: 10 },
//   ],
// };
// print(user)
// print(_.get(user, 'children[0].name', 'this is empty'))






// 7th task
// const get = (data, keys) => {
//   let result = data
//     for (const key of keys) {
//     if (Object.hasOwn(result, key)) {
//       result = result[key]
//     } else {
//       return null
//     }
//   }
//   return result
// }

// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//     },
//   },
// };
// print(get(data, ['hosts', 1, 'active']))
// print(get(data, 'car'))





// merge objects
// const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
// const data = { name: 'Tirion 2', age: 33 };
// user.name = data.name
// user.age = data.age
// print(user)

// const object1 = {a:1, b:2, c:3}
// const object2 = {d:4, e:5, f:6}
// const object3 = {d:0, e:15, f:6, g:7}
// Object.assign(object1, object2, object3)
// print(object1)





// 8th task
// const fill = (data1, keys, data2) => {
//   if (keys.length === 0) {
//     return Object.assign(data1, data2);
//   } else {
//     return Object.assign(data1, _.pick(data2, keys));
//   }
// };

// const company = {
//   name: null,
//   state: 'moderating',
// };
// const data = {
//   name: 'Hexlet',
//   state: 'published',
// };
// print(fill(company, [], data))





// cloning with Object.assign(), _.clone(), _.cloneDeep() 
// const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
// const copyOfUser = Object.assign({}, user)
// print(copyOfUser)
// print(copyOfUser === user)

// const object = {a:1, b:2, c:3}
// const copyOfObject = _.clone(object)
// print(copyOfObject)
// print(copyOfObject === object)

// const usr = { company: { name: 'Hexlet' } };
// const usr2 = _.cloneDeep(usr)
// print(usr2)
// print(usr2 ===usr)
// print(usr2.company === usr.company)




// 9th task
// const cloneDeep = (data) => {
//   const result = {}
//   // for (const [key, value] of Object.entries(data)) {
//   //   if (_.isObject(value)) {
//   //     result[key] = cloneDeep(value)
//   //   } else {
//   //     result[key] = value
//   //   }
//   // }
//   for (const key in data) {
//     if (_.isObject(data[key])) {
//       result[key] = cloneDeep(data[key])
//     } else {
//       result[key] = data[key]
//     }
//   }
//   return result
// }
// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };
// print(cloneDeep(data))
// const newResult = cloneDeep(data)
// print(newResult !== data)
// print(newResult.key2 !== data.key2)
// print(newResult.key2.innerKey !== data.key2.innerKey)





// clone and merge
// const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
// const data = { name: 'Tirion 2', age: 33 };
// const newCopy = Object.assign({}, user, data)
// print(user)
// print(data)
// print(newCopy)

// use ...spread operator to clone and merge
// const user = { name: 'Tirion 2', age: 33 };

// const newUser = {...user}
// const user2 = {a:4, ...user, b:2}
// const newUser2 = {...user, ...user}







// 10th task
// const make = (compName, parameters) => {
//   const company = {
//     name: compName,
//     state: 'moderating',
//     createdAt: Date.now(),
//     ...parameters,
//   }
//   return company
// }

// const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// print(company)





// destructuring
// const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };

// const {lastName, firstName} = person
// print(firstName)
// print(lastName)

// const {lastName: name2, firstName: name1, age = 60} = person
// print(name1)
// print(name2)
// print(age)

// const object1 = {
//   a: 2,
//   b: {
//     type1:true,
//     type2:false,
//     type3: {
//       nam:'abc',
//       id:'1234'
//     },
//   },
// }
// const {b} = object1
// print(b)
// const {type3} = object1.b
// print(type3)
// const {a, ...rest} = object1
// print(rest)





// 11th task
// const getSortedNames = (users) => {
//   const result = []
//   for (const {name} of users) {
//     result.push(name)
//   }
//   result.sort()
//   return result
// }
// const users = [
//   { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//   { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//   { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//   { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
// ];
// print(getSortedNames(users))





// 12th task
// const make = () => {
//   const newMap = []
//   return newMap
// }

// const set = (map, key, value) => {
//   const hash = CRC32.str(key)
//   const index = Math.abs(hash) % 1000
//   if (map[index] && key !== map[index][0]) {
//     return false
//   }
//   map[index] = [key, value]
//   return true
// }

// const get = (map, key, defaultValue = null) => {
//   const hash = CRC32.str(key)
//   const index = Math.abs(hash) % 1000
//   if (map[index] && key === map[index][0]) {
//     return map[index][1]
//   } else {
//     return defaultValue
//   }
// }

// const map = make();
// let result = get(map, 'key');
// console.log(result); // => null

// set(map, 'key2', 'value2');
// result = get(map, 'key', 'default_value');
// console.log(result); // => "default_value"
 
// set(map, 'key2', 'value2');
// result = get(map, 'key2');
// console.log(result); // => "value2"











// challenge 1
// const fromPairs = (incArray) => {
//   const result = {}
//   for (const [key, value] of incArray) {
//     result[key] = value
//   }
//   return result
// }

// const pets = [['cat', 5], ['dog', 6], ['cat', 11]]
// print(fromPairs(pets))



// challenge 2
// const dnaToRna = (dna) => {
//   const dependance = {
//     G:'C',
//     C:'G',
//     T:'A',
//     A:'U'
//   }
//   const result = []
//   for (const nuc of dna.split('')) {
//     if (Object.hasOwn(dependance, nuc)){
//       result.push(dependance[nuc])
//     } else {
//       return null
//     }
//   }
//   return result.join('')
// }

// print(dnaToRna('ACGTGGTCTTAA'))
// print(dnaToRna('CCGTA'))
// print(dnaToRna(''))
// print(dnaToRna('ACNTG'))



// challenge 3
// const bqs = (params) => {
//   const result = []
//   for (const [key, value] of Object.entries(params).sort()) {
//     result.push(`${key}=${value}`)
//   }
//   return result.join('&')
// }

// print(bqs({ per: 10}))
// print(bqs({ per: 10, page: 1 }))
// print(bqs({ param: 'all', param1: true }))



// challenge 4













