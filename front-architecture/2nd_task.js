const routes = {
  tasksPath: () => 'https://web-js-frontend-architecture-complex-state-5273817.evaluator1-5.hexlet.io/api/tasks',
}

const app = async () => {
  const form = document.querySelector('form')
  const field = document.querySelector('input')
  const ul = document.querySelector('ul')

  const readData = async () => {
    const resp1 = await axios.get(routes.tasksPath())
    ul.innerHTML = ''
    resp1.data.items.forEach((elem) => {
      const li = document.createElement('li')
      li.classList.add('list-group-item')
      li.append(elem.name)
      ul.append(li)
    })   
  }

  field.focus()
  await readData()

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    await axios.post(routes.tasksPath(), {name: field.value})
    await readData()
    form.reset()
    field.focus()
  })
}

app()



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js" defer></script>
//   <script src="2nd_task.js" defer></script>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
//     integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container m-3">
//     <form class="form-inline">
//       <input type="text" required="required" class="form-control mr-3" name="name">
//       <button type="submit" class="btn btn-primary mr-3">add</button>
//     </form>
//     <ul id="tasks" class="list-group" aria-label="Tasks"></ul>
//   </div>
// </body>

// </html>