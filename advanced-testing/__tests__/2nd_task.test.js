import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import path from 'path'
import { right1, wrong1, wrong2, wrong3 } from '../src/2nd_task.js'

const __filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filepath)
const dirPath = `${__dirname}/../__fixtures__`

const list = (await fs.readdir(dirPath)).filter(elem => elem !== 'result.html')
const result = await fs.readFile(`${dirPath}/result.html`, 'utf-8')

const functions = [right1, wrong1, wrong2, wrong3]
const testName = ['right1', 'wrong1', 'wrong2', 'wrong3']

functions.forEach((funcElem, i) => {
  test.each(list)(`${testName[i]} %s`, async (listElem) => {
      const elemFilePath = path.join(dirPath, listElem)
      const html = await funcElem(elemFilePath)
      expect(html).toBe(result.trim())
  })
})


