import getFunction from '../src/3rd_task.js';

const buildUser = getFunction
const functions = Object.values(getFunction)

test.each(functions)('%p', (func) => {
  const user1 = func()
  const user2 = func()
  const newData = { firstName: 'Petya' }
  const user3 = func(newData)

  expect(user1).toEqual(
    expect.objectContaining({
      email: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
    })
  )

  expect(user1).not.toEqual(user2)

  expect(user3).toMatchObject(newData)
})