import * as yup from 'yup';

const shema = yup.array().min(4)

console.log(shema.validateSync([1,2,4]));