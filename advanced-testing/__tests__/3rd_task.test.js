import getFunction from '../src/3rd_task.js';

const buildUser = getFunction
const functions = Object.values(getFunction)

test.each(functions)('%p', (func) => {

  console.log(func({ firstName: 'Petya' }))
})