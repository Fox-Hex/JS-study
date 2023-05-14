// class Main {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }

//   say() {
//     this.hello()
//   }
// }

// class Second extends Main {
//   hello() {
//     console.log('Hello');
//   }
// }

// const as = new Second
// as.say()





class HTMLElement {
  constructor(tagName, body = '', attributes = {}) {
    this.attributes = attributes;
    this.tagName = tagName
    this.body = body
  }

  getTagName() {
    return this.tagName
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
  }

  getAttribute(key) {
    return this.attributes[key];
  }

  getTextContent() {
    return this.body;
  }

  setTextContent(body) {
    this.body = body;
  }

  stringifyAttributes() {
    const stringAttr = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('')
    return stringAttr
  }
}

class HTMLSingleElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    const tagName = this.getTagName();
    return `<${tagName}${attrLine}>`
  }
}

class HTMLPairElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    const body = this.getTextContent();
    const tagName = this.getTagName();
    return `<${tagName}${attrLine}>${body}</${tagName}>`;
  }
}

const a = new HTMLPairElement('a', 'new link!', {href: 'www.a.ru'})
console.log(a.toString());