import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';
import papa from 'papaparse';

const parsers1 = {
  csv: (content) => papa.parse(content).data[0],
  json: JSON.parse,
  yml: yaml.load,
};

const parsers2 = {
  json: JSON.parse,
  yml: yaml.load,
  csv: () => [],
};

const parsers3 = {
  csv: (content) => papa.parse(content).data[0],
  json: JSON.parse,
  yml: () => [],
};

const parsers4 = {
  csv: (content) => papa.parse(content).data[0],
  yml: yaml.load,
  json: () => [],
};

const genSolution = (parsers) => async (filepath) => {
  const content = await fs.readFile(filepath, 'utf-8');
  const type = path.extname(filepath).slice(1);
  const items = parsers[type](content);
  const lis = items.map((item) => `  <li>${item}</li>`);
  return `<ul>\n${lis.join('\n')}\n</ul>`;
};

const right1 = genSolution(parsers1)
const wrong1 = genSolution(parsers2)
const wrong2 = genSolution(parsers3)
const wrong3 = genSolution(parsers4)

export { right1, wrong1, wrong2, wrong3 }