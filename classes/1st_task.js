class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    const stringAttr = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('')
    return stringAttr
  }
}

class HTMLHrElement extends HTMLElement {
  toString() {
    const attr = this.stringifyAttributes()
    return `<hr${attr}>`
  }
}

const hr = new HTMLHrElement();
console.log(hr.toString()); // => <hr>
 
const hr2 = new HTMLHrElement({ class: 'w-75', id: 'wop' });
console.log(hr2.toString()); // => '<hr class="w-75" id="wop">';
