import { fileURLToPath } from 'url';
import path from 'path';
import { expect, jest } from '@jest/globals';
import getFunction from '../src/8th_task.js';

const getFilesCount = Object.values(getFunction)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test.each(getFilesCount)('%p', (func) => {
  const nestedPath = getFixturePath('nested')
  const callback = jest.fn()
  func(nestedPath, callback)

  expect(callback).toHaveBeenCalledTimes(1)
  expect(callback).toHaveBeenCalledWith('Go!')
})