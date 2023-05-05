const tagSet = {
  a: 'href',
  link: 'href',
  img: 'src',
}

const getLinks = (tags) => {
  const tagKeys = Object.keys(tagSet)
  const tagValues = Object.values(tagSet)

  return tags
    .filter(elem => tagKeys.includes(elem.name))
    .map(elem => {
      const i = Object.keys(elem)
        .filter(elem => tagValues.includes(elem))
      return elem[i]
    })
}


const tags = [
  { name: 'img', src: 'hexlet.io/assets/logo.png' },
  { name: 'div' },
  { name: 'link', href: 'hexlet.io/assets/style.css' },
  { name: 'h1' },
];
const links = getLinks(tags);
console.log(links);
// [
//   'hexlet.io/assets/logo.png',
//   'hexlet.io/assets/style.css'
// ];
