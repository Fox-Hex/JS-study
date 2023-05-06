import _ from 'lodash'

class InMemoryKV {
  constructor(data = {}) {
    Object.entries(data)
    .forEach(([key, value]) => this.set(key, value));
  }

  set(key, value) {
    this[key] = value
  }

  unset(key) {
    delete this[key]
  }

  get(key, defaultValue = null) {
    return this[key] ?? defaultValue
  }

  toObject() {
    return JSON.parse(JSON.stringify(this))
  }
}

const swapKeyValue = (map) => {
  const copyMap = Object.entries(map)
  copyMap.forEach(([key]) => map.unset(key)) 
  copyMap.forEach(([key, value]) => map.set(value, key)) 
}



// const deepObj = { key1: 'value1', key2: { key3: 'value2' } };
// const cloneDeepObj = _.cloneDeep(deepObj);
// const map = new InMemoryKV(deepObj);

// const map2 = map.toObject();
// map2.key2.key3 = 'another_value';
// // console.log(map.toObject()) //.not.toBe(cloneDeepObj);
// console.log(map.toObject()) //.toEqual(cloneDeepObj);
// console.log(cloneDeepObj);


const map = new InMemoryKV({ foo: 'bar', bar: 'zoo' });
console.log(map)
swapKeyValue(map);
console.log(map.toObject())


// const map = new InMemoryKV({ key: 10, key7: 'hello' });
// console.log(map.get('key2', 'default'))
// map.set('key2', false);
// console.log(map.get('key2', 'default'))
// console.log(map.toObject());

// swapKeyValue(map);

// console.log(map.get('key')); // null
// console.log(map.get(10)); // 'key'
// console.log(map.get('value2')); // 'key2'
// console.log(map);