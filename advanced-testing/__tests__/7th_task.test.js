import nock from 'nock';
import getFunction from '../src/7th_task.js';

const getUserMainLanguage = Object.values(getFunction)

nock.disableNetConnect();

const data = [
  { language: 'php'},
  { language: 'javascript'},
  { language: 'javascript'},
  { language: "python" },
  { language: "python" },
  { language: 'javascript'},
]

test.each(getUserMainLanguage)('%p', async (func) => {
  nock(/api\.github\.com/)
    .get(/\/users\/Fox-Hex\/repos/)
    .reply(200, data)
  const language = await func('Fox-Hex')
  expect(language).toEqual('javascript')
})


// https://api.github.com/users/Fox-Hex/repos