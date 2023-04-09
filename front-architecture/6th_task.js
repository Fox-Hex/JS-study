const listsContainer = document.querySelector('[data-container="lists"]')
const tasksContainer = document.querySelector('[data-container="tasks"]')
const listsForm = document.querySelector('[data-container="new-list-form"]')
const tasksForm = document.querySelector('[data-container="new-task-form"]')

const data = {
  lists: [
    {id: _.uniqueId(), name: 'General', status: 'active'},
  ],
  tasks: []
}

const renderLists = () => {
  listsContainer.innerHTML = ''
  const ul = document.createElement('ul')

  data.lists.forEach((elem) => {
    const li = document.createElement('li')
    if (elem.status === 'active') {
      const b = document.createElement('b')
      b.append(elem.name)
      li.append(b)
    } else {
      const a = document.createElement('a')
      a.href = '#' + elem.name.toLocaleLowerCase()
      a.append(elem.name)
      li.append(a)

      a.addEventListener('click', () => {
        data.lists.filter(elem => elem.status === 'active')[0].status = ''
        elem.status = 'active'
        renderLists()
        renderTasks()
      })
    }

    ul.append(li)
  })

  listsContainer.append(ul)
}

const renderTasks = () => {
  tasksContainer.innerHTML = ''
  const ul = document.createElement('ul')

  const activeID = data.lists.filter(elem => elem.status === 'active')[0].id
  data.tasks
    .filter((elem) => elem.list_id === activeID)
    .forEach((elem) => {
      const li = document.createElement('li')
      li.append(elem.name)
      ul.append(li)
    })
  
  if (ul.innerHTML.length > 0) {
    tasksContainer.append(ul)
  }
}

renderLists()
renderTasks()

listsForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const newListName = (new FormData(listsForm)).get('name')
  if (!data.lists.filter(elem => elem.name === newListName).length > 0) {
    data.lists.push({id: _.uniqueId(), name: newListName, status: ''})
  }
  listsForm.reset()
  renderLists()
  renderTasks()
})

tasksForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTaskName = (new FormData(tasksForm)).get('name')
  const currentListID = data.lists.filter(elem => elem.status === 'active')[0].id
  data.tasks.push({list_id: currentListID, name: newTaskName})
  tasksForm.reset()
  renderLists()
  renderTasks()
})



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" defer></script>
// </head>

// <body>
//   <div class="container m-3">
//     <div class="row">
//       <div class="col">
//         <h3>Lists</h3>
//         <form class="form-inline mb-2" data-container="new-list-form">
//           <label for="new-list-name" class="sr-only">New list name</label>
//           <input type="text" id="new-list-name" class="form-control mr-2" name="name" required>
//           <input type="submit" class="btn btn-primary" value="Add List">
//         </form>
//         <div data-container="lists"></div>
//       </div>
//       <div class="col">
//         <h3>Tasks</h3>
//         <form class="form-inline mb-2" data-container="new-task-form">
//           <label for="new-task-name" class="sr-only">New task name</label>
//           <input type="text" id="new-task-name" class="form-control mr-2" name="name" required>
//           <input type="submit" class="btn btn-primary" value="Add Task">
//         </form>
//         <div data-container="tasks"></div>
//       </div>
//     </div>
//   </div>
//   <script src="6th_task.js" defer></script>
// </body>

// </html>