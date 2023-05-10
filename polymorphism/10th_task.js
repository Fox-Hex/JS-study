import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

class Config {
  constructor(data = {}) {
    this.data = data;
  }
  getValue(key) {
    const result = this.data[key];
    if (result instanceof Object) {
      return new Config(result);
    }
    return result;
  }
}

class JsonParser {
  read(data) {
    return JSON.parse(data)
  }
}

class YamlParser {
  read(data) {
    return yaml.load(data)
  }
}

const mapping = {
  yaml: YamlParser,
  yml: YamlParser,
  json: JsonParser
}

class ConfigFactory {
  static factory(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf-8')
    const ext = path.extname(filePath).slice(1)

    const parser = new mapping[ext]()

    const data = parser.read(rawData)
    return new Config(data)
  }
}


const dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(dirname, '__fixtures__', 'test.yml')

const config = ConfigFactory.factory(filePath)
console.log(config);
console.log(config.getValue('key')); // value
console.log(config.constructor.name); // Config

import { fileURLToPath } from 'url';