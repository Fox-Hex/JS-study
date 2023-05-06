import fs from 'fs';
import path from 'path';

class DatabaseConfigLoader {
  constructor(configPath) {
    this.configPath = configPath
    this.config = fs.readdirSync(configPath)
  }

  load(configType) {
    const filename = this.config.find(elem => elem.includes(`.${configType}.`))
    const pathToConfig = path.join(this.configPath, filename)
    const raw = fs.readFileSync(pathToConfig, 'utf-8')
    const parse = JSON.parse(raw)
    if(parse.extend) {
      const {extend, ...extendParse} = {...this.load(parse.extend), ...parse}
      return extendParse
    }
    return parse
  }
}



const loader = new DatabaseConfigLoader('__fixtures__');
const config = loader.load('preproduction'); // loading database.production.json
console.log(config);
// {
//   host: 'google.com',
//   username: 'postgres',
// };