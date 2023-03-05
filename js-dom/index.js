// const showTheWay = () => {
//   console.log('Run Boy Run');
// };
// window.open()




// const html = `
//     <p>hello, <b>world</b>!</p>
// `;
// const parser = new DOMParser()
// const doc = parser.parseFromString(html, 'text/html')
// console.log(doc.body.innerHTML)





// const a = document.documentElement
// console.log(a.tagName);
// console.log(a.childNodes);
// console.log(a.childNodes[1]);
// console.log(a.firstChild);
// console.log(a.lastChild);
// console.log(document.head);


// const b = document.documentElement.childNodes
// const list = Array.from(b)
// const filtered = list.filter(item => item.textContent.includes('asd')).map(elem => elem.tagName)
// console.log(filtered);


// console.log(document.body.toString())
// console.log(document.body instanceof HTMLBodyElement)


// const node = document.documentElement
// console.log(node.children)
// console.log(node.childNodes)

// const table = document.body.firstElementChild
// console.log(table.rows[0].cells[2]);



// const body = document.body
// console.log(body.childNodes[1].innerHTML);
// console.log(body.childNodes[1].textContent);

// body.innerHTML = '<b>make</b> love'
// console.log(body.innerHTML);
// console.log(body.textContent);

// console.log(body.childNodes);

// document.body.textContent = '<b>make</b> love'
// console.log(document.body.innerHTML);



// const textNode = document.createTextNode('life is life')
// console.log(textNode);

// const pElem = document.createElement('p')
// pElem.append(textNode)
// console.log(pElem);

// const el = document.createElement('div')
// el.append(pElem)
// console.log(el);

// document.body.prepend(el)
// el.before(document.createElement('h1'))
// el.after(document.createElement('h2'))
// el.replaceWith(document.createElement('h4'))

// const newElem = el.cloneNode(true)
// document.body.prepend(newElem)




// const el = document.querySelector('#aboutPage')
// console.log(el.id);
// console.log(el.href);

// console.log(el.classList.value);
// el.classList.add('page')
// console.log(el.classList.value);
// el.classList.remove('simple')
// console.log(el.classList.value);

// console.log(el.classList.contains('page'));
// el.classList.toggle('on/off')
// console.log(el.classList);
// el.classList.toggle('on/off')
// console.log(el.classList);

// console.log(el.hasAttribute('href'))
// console.log(el.getAttribute('id'))
// console.log(el.setAttribute('id', 555))
// console.log(el.attributes)
// console.log(el.attributes.id)



// const button = document.getElementById('myButton')
// const handler = (say) => console.log(say)

// button.addEventListener('click', () => handler('press'))
// button.addEventListener('mouseenter', () => {console.log('hover')})
// button.click()

// button.removeEventListener('click' , handler)

// const input = document.getElementById('textInput')
// input.focus()

// const element = document.body
// element.addEventListener('click', (event) => {
//   // handler('wow!')
//   console.log([
//     event.target.tagName,
//     event.clientX,
//     event.clientY,
//   ]);
// })
// element.click()




// const allLinks = document.querySelectorAll('[data-toggle="tab"]')

// allLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     const activeElement = link.closest('.nav').querySelector('.active')
//     activeElement.classList.remove('active')
//     link.classList.add('active')
//   })
// })




// const form = document.querySelector('form')
// console.log(form.elements);
// form.elements.password.addEventListener('click', () => console.log('pass?'))


// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const data = new FormData(event.target)
//   console.log(data.get('email'));
//   console.log([...data.values()]);
//   console.log([...data.entries()]);

//   const obj = Object.fromEntries(data)
//   console.log(obj);
// })

// const inputEmail = document.querySelector('[name="email"]')
// inputEmail.addEventListener('input', (event) => {
//   const text = new FormData(form)
//   console.log(text.get('email'))
// })



// fetch('./155.json')
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.headers.get('content-type'));
//     return response.json()
//   })
//   .then((article) => {
//     console.log(article.name);
//   })
//   .catch(console.error)


// const form = document.querySelector('form')
// fetch('./155.json', {
//   method: 'POST',
//   body: new FormData(form),
// })

