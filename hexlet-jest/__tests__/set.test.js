import set from 'lodash/set'
import cloneDeep from 'lodash/cloneDeep'

let object
let object2

beforeEach(() => {
  object = { a: [{ b: { c: 3 } }] };
  object2 = cloneDeep(object)
})

test('changing existed element value', () => {
  set(object, 'a[0].b.c', 4);
  object2.a[0].b.c = 4
  expect(object.a[0].b.c).toBe(object2.a[0].b.c)
})
test('create new element', () => {
  set(object, ['x', '0', 'y', 'z'], 5);
  object2.x = []
  object2.x[0] = {y:{z:5}}
  expect(object.x[0].y.z).toBe(object2.x[0].y.z)
})
test('first declared value', () => {
  expect(object.a[0].b.c).toEqual(object2.a[0].b.c)
})
test('?', () => {
  set(object, 'a[0].b.c', 4);
  object2.a[0].b.c = 4
  expect(object).toStrictEqual(object2)
})