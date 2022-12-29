// import * as yup from 'yup';

// const shema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().integer().positive()
// })

// const data = { name: 'ivan', age: 23 }
// console.log(shema.validateSync(data));




// const usersCountByCountry = {}

// const handlers = {
//   get: (target, property) => {
//     if (property in target) {
//       return target[property]
//     }
//     return 0
//   }
// }

// const obj = new Proxy(usersCountByCountry, handlers)

// obj.russia

// console.log(obj.usa+=1);
// console.log(obj);
// console.log(obj.usa+=1);
// console.log(obj);




const student = {
  name: 'Alex',
  age: 23,
  program: 'front-end',
}

const rewrite = new Proxy(student, {
  set(target, property, value) {
    if (property in target) {
      target[property] = value
      return true
    } else {
      throw new Error(`Cannot rewrite not-existing '${property}'`)
    }
  }
})

console.log(student); //original
console.log(rewrite); //proxy

rewrite.name = 'Dick' //work with proxy

console.log(student); //original
console.log(rewrite); //proxy
console.log(rewrite === student); //compare original and proxy