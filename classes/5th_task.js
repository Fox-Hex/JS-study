class InMemory {
  constructor(elements = {}) {
    this.elements = elements;
  }

  get(key) {
    return this.elements[key];
  }

  set(key, value) {
    this.elements[key] = value;
  }

  count() {
    return Object.keys(this.elements).length;
  }
}

class Redis {
  constructor() {
    this.elements = new Map();
  }

  get(key) {
    if (!this.elements.has(key)) {
      throw new Error(`Not found key "${key}"`);
    }
    return this.elements.get(key);
  }

  set(key, value) {
    this.elements.set(key, value);
  }

  count() {
    return this.elements.size;
  }
}

class GoogleStorage {
  constructor(elements = {}) {
    this.elements = elements
  }
  get(key) {
    return this.elements[key]
  }
  set(key, value) {
    this.elements[key] = value
  }
  count() {
    throw Error
  }
}



 
const storage = new GoogleStorage();
storage.set('one', 'two');
console.log(storage.get('one')); // 'two'
console.log(storage.count()); // Error