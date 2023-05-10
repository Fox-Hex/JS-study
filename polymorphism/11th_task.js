class InputTag {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
  render() {
    return `<input type="${this.type}" value="${this.value}">`;
  }
  toString() {
    return this.render();
  }
}

class LabelTag {
  constructor(...data) {
    this.data = data
  }

  render() {
    return `<label>${this.data.join('')}</label>`
  }

  toString() {
    return this.render();
  }
}
 
const tag = new InputTag('submit', 'Save');
console.log(tag.render()); // <input type="submit" value="Save">

const inputTag = new InputTag('submit', 'Save');
const labelTag = new LabelTag('Press Submit', inputTag);
console.log(labelTag.render());
// <label>
//   Press Submit
//   <input type="submit" value="Save">
// </label>
