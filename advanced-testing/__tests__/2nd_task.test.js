import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import path from 'path'
import { right1, wrong1, wrong2, wrong3 } from '../src/2nd_task.js'

const __filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filepath)
const dirPath = `${__dirname}/../__fixtures__`

const list = await fs.readdir(dirPath)
const result = await fs.readFile(`${dirPath}/result.html`, 'utf-8')



test.each(list)('right1', async (elem) => {
  if (elem !== 'result.html') {
    const elemFilePath = path.join(dirPath, elem)
    const html = await right1(elemFilePath)
    expect(html).toBe(result.trim())
  }
})
