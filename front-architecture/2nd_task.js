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

const path = 'https://web-js-frontend-architecture-complex-state-5250612.evaluator2-5.hexlet.io/api/tasks'

const b = async () => {
  const resp1 = await axios.get(path)
  resp1.data.items.push({name: 'task2'})

  const resp2 = await axios.post(path, resp1.data)
}

b()