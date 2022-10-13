const make = (url) => new URL(url)

const setProtocol = (data, protocol) => data.protocol = protocol

const getProtocol = (data) => data.protocol

const setHost = (data, host) => data.host = host

const getHost = (data) => data.host

const setPath = (data, path) => data.pathname = path

const getPath = (data) => data.pathname

const setQueryParam = (data, key, value) => {
    if (data.search === '') {// if no params - add new param
        data.search = `?${key}=${value}`
    }
    if (data.search !== '') {   // if already has param - 
        if (data.search.includes(key)) {    // if this param includes - replace it
            const oldParam = `${key}=${getQueryParam(data,key)}`
            const newParam = `${key}=${value}`
            data.search = data.search.replace(oldParam, newParam)
        } else {    // if this param not includes - add new param
            data.search += `&${key}=${value}`
        }
    }
}

const getQueryParam = (data, paramName, def = null) => {
    const par = new URLSearchParams(data.search)
    if (!paramName) {
        return data.search
    }
    if (par.get(paramName)) {
        return par.get(paramName)
    }
    return def
}

const toString = (data) => {
    const protocol = getProtocol(data)
    const host = getHost(data)
    const path = getPath(data)
    const param = getQueryParam(data)
    return `${protocol}//${host}${path}${param}`
}


const url = make('https://hexlet.io/community?page=7&a=6');
console.log(url);
console.log(toString(url));

setProtocol(url, 'http:');
console.log(toString(url)) // 'http://hexlet.io/community?q=low'
 
setPath(url, '/404');
console.log(toString(url)) // 'http://hexlet.io/404?q=low'
 
setQueryParam(url, 'page', 5);
console.log(toString(url)) // 'http://hexlet.io/404?q=low&page=5'
 
setQueryParam(url, 'q', 'high');
console.log(toString(url)) // 'http://hexlet.io/404?q=high&page=5'

setHost(url, 'ya.ru')
console.log(toString(url));

console.log(getQueryParam(url, 'low', 'user'));