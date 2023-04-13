import onChange from "./src/on-change.js"

const lists = document.querySelectorAll('.list-group')
const contents = document.querySelectorAll('.tab-content')

lists.forEach((elem) => {
  elem.childNodes.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      console.log(e.target.getAttribute('aria-controls'));
    })
  })
})
