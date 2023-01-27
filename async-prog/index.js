import fs from 'fs'

const content = fs.readFileSync('./index.html', 'utf-8')
fs.writeFileSync('new', content)