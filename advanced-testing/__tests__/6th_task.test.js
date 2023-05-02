import OctokitFake from '../support/octokitFake.js'
import getFunction from '../src/6th_task.js'

const getUserMainLanguage = Object.values(getFunction)
const data = [
  { language: 'php'},
  { language: 'javascript'},
  { language: 'javascript'},
]

const client = new OctokitFake(data)
const clientEmpty = new OctokitFake([{language: ''}])

test.each(getUserMainLanguage)('%p', async (func) => {
  const language = await func('Fox-Hex', client)
  const languageEmpty = await func('Fox-Hex', clientEmpty)
  expect(language).toEqual('javascript')
  expect(languageEmpty).toEqual('')
})
