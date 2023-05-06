const stringify = (tag) => {
  const def = ['name', 'tagType', 'body']
  const attributes = Object.keys(tag)
    .filter(key => !def.some(t => t === key))
    .reduce((acc, elem) => acc += ` ${elem}="${tag[elem]}"`, '')
  
  const parameter = {
    single: (tag) => {
      return `<${tag.name}${attributes}>`
    },
    pair: (tag) => {
      const tagStart = `<${tag.name}${attributes}>`
      const tagEnd = `</${tag.name}>`
      const body = `${tag.body}`
      return tagStart + body + tagEnd
    },
  }
  
  return parameter[tag.tagType](tag)
}



const hrTag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
console.log(stringify(hrTag)) // <hr class="px-3" id="myid">

const divTag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
console.log(stringify(divTag)) // <div id="wow">text2</div>

const emptyDivTag = {
  name: 'div',
  tagType: 'pair',
  body: '',
  id: 'empty',
};
console.log(stringify(emptyDivTag)) // <div id="empty"></div>
