import cheerio from 'cheerio'

class Sanitizer {
  sanitize(text) {
    return text.trim()
  }
}

const stripTags = (tagString) => {
  const form = cheerio.load(tagString)
  return form.text()
};

class SanitizerStripTagsDecorator {
  constructor(base) {
    this.base = base
  }
  sanitize(text) {
    const cut = stripTags(text)
    return this.base.sanitize(cut)
  }
}

const baseSanitizer = new Sanitizer();
console.log(baseSanitizer.sanitize(' loom  '));

console.log(stripTags('<p>some text</p>')) // "some text"

const sanitizer = new SanitizerStripTagsDecorator(baseSanitizer);
console.log(sanitizer.sanitize('text   ')); // 'text'
console.log(sanitizer.sanitize(' boom ')); // 'boom'