class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = Object.entries(attributes);
  }

  stringifyAttributes() {
    if (this.attributes.length === 0) {
      return '';
    }

    const line = this.attributes
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(' ');

    return ` ${line}`;
  }
}

class HTMLPairElement extends HTMLElement {
  toString() {
    const attr = this.stringifyAttributes()
    const body = this.getTextContent()
    return `<${this.tag}${attr}>${body}</${this.tag}>`
  }
  getTextContent() {
    if (!this.body) {
      return ''
    }
    return this.body
  }
  setTextContent(body) {
    this.body = body
  }
}

class HTMLDivElement extends HTMLPairElement {
  constructor(attributes = {}) {
    super(attributes)
    this.tag = 'div'
  }
}


const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
div.setTextContent('Body');
console.log(div.toString()); // '<div name="div" data-toggle="true">Body</div>'

const div2 = new HTMLDivElement();
console.log(`${div2}`);
