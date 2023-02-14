// const showTheWay = () => {
//   console.log('Run Boy Run');
// };

// window.open()




const html = `
    <p>hello, <b>world</b>!</p>
`;
const parser = new DOMParser()
const doc = parser.parseFromString(html, 'text/html')
console.log(doc.body.innerHTML)