// const data = [16, 64, 4]
// const data2 = data.map(Math.sqrt)
// const predicate = (v) => unknown > 2

// try {
//   const data3 = data2.filter(predicate)
// } catch (a) {
//   console.log('catcha');
// }

import fs from 'fs'

const content = fs.readFileSync('./index.html', 'utf-8')
fs.writeFileSync('./new', content)