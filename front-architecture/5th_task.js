const fields = document.querySelectorAll('.container > div')

const state = {
  process: {
    name: 'done',
    email: 'done',
  }
}

const renderForm = (elem, name) => {
  const form = document.createElement('form')
  const label = document.createElement('label')
  label.classList.add('sr-only')
  label.setAttribute('for', name)
  label.append(name)
  const inputText = document.createElement('input')
  inputText.setAttribute('type', 'text')
  inputText.id = name
  inputText.setAttribute('name', name)
  const inputSubmit = document.createElement('input')
  inputSubmit.setAttribute('type', 'submit')
  inputSubmit.value = `Save ${name}`
  form.append(label, inputText, inputSubmit)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newText = inputText.value
    elem.innerHTML = ''
    if (newText === '' || newText === name) {
      const i = document.createElement('i')
      i.append(name)
      elem.append(i)
    } else {
      elem.append(newText)
    }
    state.process[name] = 'done'
  })

  elem.innerHTML = ''
  elem.append(form)
  inputText.focus()
}

fields.forEach((elem) => {
  const name = elem.getAttribute('data-editable-target')
  elem.addEventListener('click', () => {
    if (state.process[name] === 'done') {
      renderForm(elem, name)
      state.process[name] = 'edit'
    }
  })
})



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container m-3">
//     <div data-editable-target="name">
//       <i>name</i>
//     </div>
//     <div data-editable-target="email">
//       <i>email</i>
//     </div>
//   </div>
//   <script src="5th_task.js" defer></script>
// </body>
// </html>