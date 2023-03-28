const routes = {
  tasksPath: () => '/api/tasks',
};

const form = document.querySelector('form')
const field = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('.list-group')

field.focus()

button.addEventListener('click', async (e) => {
  e.preventDefault()

  const li = document.createElement('li')
  li.append(field.value)
  
  const response = await axios.post(routes.tasksPath(), data)

  form.reset()
})