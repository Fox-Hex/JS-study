import fc from 'fast-check';
import getFunction from '../src/9th_task.js';

const sort = Object.values(getFunction)

test.each(sort)('%p', (func) => {
  const numbers = [3, 1, 0, 7, 5]
  expect(func(numbers)).toBeSorted()

  fc.assert(
    fc.property(
      fc.array(fc.integer({min: 0, max: 9}),  { minLength: 3, maxLength: 10}),
      array => expect(func(array)).toBeSorted()
    )
  )
})
