class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParseError';
  }
}

function parseJson(string) {
  
  try {
    JSON.parse(string)
  } catch (e) {
    throw new ParseError('Invalid JSON string')
  }

  return JSON.parse(string)
}

const json = '{ "key": "value" }';
console.log(parseJson(json)) // { key: 'value' }
 
const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string