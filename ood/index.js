import * as yup from 'yup';

const shema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().integer().positive()
})

const data = { name: 'ivan', age: 23 }
console.log(shema.validateSync(data));