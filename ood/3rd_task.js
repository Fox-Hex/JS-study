class Url {
  constructor(address) {
    const newUrl = new URL(address)

    this.sheme = newUrl.protocol
    this.host = newUrl.host
    this.hostname = newUrl.hostname
    this.search = newUrl.search
    this.params = new URLSearchParams(newUrl.search)
  }

  getScheme() {
    return this.sheme.split('').filter((char) => char !== ':').join('')
  }

  getHostName() {
    return this.hostname
  }

  getQueryParams() {
    return Object.fromEntries(this.params)
  }

  getQueryParam(key, empty = null) {
    return Object.fromEntries(this.params)[key] ?? empty
  }

  equals(url) {
    const shemeMatch = url.getScheme() === this.getScheme()
    const hostMatch = url.host === this.host
    const hostnameMatch = url.getHostName() === this.getHostName()
    const searchMatch = url.search === this.search
    return shemeMatch && hostMatch && hostnameMatch && searchMatch
  }
}

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
console.log(url);

console.log(url.getScheme()); // 'http'
console.log(url.getHostName()); // 'yandex.ru'
console.log(url.getQueryParams());
// {
//   key: 'value',
//   key2: 'value2',
// };
console.log(url.getQueryParam('key')); // 'value'
// второй параметр - значение по умолчанию
console.log(url.getQueryParam('key2', 'lala')); // 'value2'
console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
console.log(url.getQueryParam('new')); // null
console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false
