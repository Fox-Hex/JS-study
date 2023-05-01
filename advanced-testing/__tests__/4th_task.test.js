import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import getFunction from '../src/4th_task.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prettifyHTMLFile = Object.values(getFunction)

const beforePath = path.join(__dirname, '../__fixtures2__/before.html')
const afterPath = path.join(__dirname, '../__fixtures2__/after.html')
const testFilePath = `${os.tmpdir}/tempTaskFile`

test.each(prettifyHTMLFile)('%p', async (func) => {
  const beforeHtml = await fs.readFile(beforePath, 'utf-8')
  const afterHtml = await fs.readFile(afterPath, 'utf-8')
  await fs.writeFile(testFilePath, beforeHtml)

  await func(testFilePath)
  const result = await fs.readFile(testFilePath, 'utf-8')
  expect(result).toEqual(afterHtml)
})
