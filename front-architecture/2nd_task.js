// const routes = {
//   tasksPath: () => 'file',
// };

// const form = document.querySelector('form')
// const field = document.querySelector('input')
// const button = document.querySelector('button')
// const list = document.querySelector('.list-group')

// field.focus()

// button.addEventListener('click', async (e) => {
//   e.preventDefault()

//   const li = document.createElement('li')
//   li.append(field.value)
  
//   const data = 'fsdf'
//   const response = await axios.post(routes.tasksPath(), data)

//   form.reset()
// })


const app = async () => {
  const path = 'https://web-js-frontend-architecture-complex-state-5250612.evaluator2-5.hexlet.io/api/tasks'
  const form = document.querySelector('form')
  const field = document.querySelector('input')

  const readData = async () => {
    const resp1 = await axios.get(path)
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    resp1.data.items.forEach((elem) => {
      const li = document.createElement('li')
      li.append(elem.name)
      ul.append(li)
    })   
  }

  field.focus()

  addEventListener('DOMContentLoaded', readData())

  form.addEventListener('submit', async (e) => {
    // e.preventDefault()
    const resp2 = await axios.post(path, {name: field.value})
    readData()
    // form.reset()
  })
}

app()