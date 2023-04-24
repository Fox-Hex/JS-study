import {right1, wrong1, wrong2} from '../src/1st_task.js';

test('right', () => {
  expect(() => right1()).not.toThrow()
})
test('wrong 1', () => {
  expect(() => wrong1('/undefined')).toThrow()
})
test('wrong 2', () => {
  expect(() => wrong2('/etc')).toThrow()
})