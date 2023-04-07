const fields = document.querySelectorAll('.container > div')
fields.forEach((elem) => {
  const text = elem.innerHTML
  elem.addEventListener('click', (e) => {
    console.log(text);
  })
})