import { fileURLToPath } from 'url';
import path from 'path';
import _ from 'lodash';
import getFunction from '../src/5th_task.js';

const getFilesCount = Object.values(getFunction)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

const flatDir = getFixturePath('flat')
const nestedDir = getFixturePath('nested')
const oneDir = getFixturePath('nested/one')

test.each(getFilesCount)('%p', (func) => {
  const files1 = func(flatDir, () => {_.noop()})
  const files2 = func(nestedDir, () => {_.noop()})
  const files3 = func(oneDir, () => {_.noop()})
  expect(files1).toEqual(3)
  expect(files2).toEqual(4)
  expect(files3).toEqual(2)
})