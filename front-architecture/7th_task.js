import onChange from "./src/on-change.js"


// Model
const state = {
  lists: {}
}

// View
const watchedState = onChange(state, (path, current, previous) => {
  const currentTab = document.querySelector(`#${current}`)
  const currentPanel = document.querySelector(`[aria-labelledby="${current}"]`)
  const previousTab = document.querySelector(`#${previous}`)
  const previousPanel = document.querySelector(`[aria-labelledby="${previous}"]`)

  currentTab.classList.add('active')
  currentPanel.classList.add('active', 'show')
  previousTab.classList.remove('active')
  previousPanel.classList.remove('active', 'show')
})

// Control
const lists = document.querySelectorAll('.list-group')

lists.forEach((elem) => {
  const listId = elem.id
  const activeTab = elem.querySelector('.active')

  state.lists[listId] = {
    tabId: activeTab.id
  }

  elem.addEventListener('click', (e) => {
    e.preventDefault()
    watchedState.lists[listId].tabId = e.target.id
  })
})



// <!DOCTYPE html>
// <html lang="ru">

// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <meta charset="UTF-8">

//   <!-- Bootstrap CSS -->
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
// </head>

// <body class="bg-light">
//   <div class="container">
//     <div class="row">
//       <aside class="col-3 pt-3 min-vh-100 bg-body-secondary">
//         <div class="h3 mb-3">Навигация</div>
//         <nav class="list-group list-group-numbered" id="main-content-list" role="tablist">
//           <a
//             data-testid="javascript-main-tab"
//             class="list-group-item active"
//             id="list-javascript-list"
//             data-bs-toggle="list"
//             href="#list-javascript"
//             role="tab"
//             aria-controls="list-javascript">
//             JavaScript
//           </a>

//           <a
//             data-testid="python-main-tab"
//             class="list-group-item"
//             id="list-python-list"
//             data-bs-toggle="list"
//             href="#list-python"
//             role="tab"
//             aria-controls="list-python">
//             Python
//           </a>

//           <a
//             class="list-group-item"
//             id="list-ruby-list"
//             data-bs-toggle="list"
//             href="#list-ruby"
//             role="tab"
//             aria-controls="list-ruby">
//             Ruby
//           </a>

//         </nav>
//       </aside>
//       <main class="col-9 pt-3 px-5 border-start">
//         <h1 class="display-3 fw-bold">Популярные языки программирования</h1>
//         <small class="text-black-50">Для выбора языка используйте меню в левой части страницы</small>

//         <div class="card shadow tab-content mt-4" id="nav-mainContent">
//           <div class="card-body tab-pane fade show active" id="list-javascript" role="tabpanel" aria-labelledby="list-javascript-list">
//               <h2>JavaScript</h2>

//               <small class="text-black-50">Источник: https://ru.wikipedia.org/wiki/JavaScript</small>
//           </div>

//           <div class="card-body tab-pane fade" id="list-python" role="tabpanel" aria-labelledby="list-python-list">
//             <h2>Python</h2>

//             <small class="text-black-50">Источник: https://ru.wikipedia.org/wiki/Python</small>
//           </div>

//           <div class="card-body tab-pane fade" id="list-ruby" role="tabpanel" aria-labelledby="list-ruby-list">
//             <h2>Ruby</h2>

//             <small class="text-black-50">Источник: https://ru.wikipedia.org/wiki/Ruby</small>
//           </div>
//         </div>

//         <h2 class="mt-5 mb-3">Где изучать</h2>
//         <div class="list-group list-group-horizontal" id="secondary-content-list" role="tablist">
//           <a
//             data-testid="javascript-secondary-tab"
//             class="list-group-item list-group-item-action active"
//             id="secondary-javascript-list"
//             data-bs-toggle="list"
//             href="#secondary-javascript"
//             role="tab"
//             aria-controls="secondary-javascript">
//             JavaScript
//           </a>

//           <a
//             data-testid="python-secondary-tab"
//             class="list-group-item list-group-item-action"
//             id="secondary-python-list"
//             data-bs-toggle="list"
//             href="#secondary-python"
//             role="tab"
//             aria-controls="secondary-python">
//             Python
//           </a>

//           <a
//             class="list-group-item list-group-item-action"
//             id="secondary-ruby-list"
//             data-bs-toggle="list"
//             href="#secondary-ruby"
//             role="tab"
//             aria-controls="secondary-ruby">
//             Ruby
//           </a>
//         </div>

//         <div class="tab-content mt-4" id="nav-secondaryContent">
//           <div class="tab-pane fade show active" id="secondary-javascript" role="tabpanel" aria-labelledby="secondary-javascript-list">
//             <div class="row" style="--bs-gutter-y: 1rem">
//               <div class="col-6">
//                 <div class="card h-100">
//                   <div class="card-body">
//                     <div class="badge bg-light text-dark me-2 mb-2">Профессия</div>
//                     <span class="badge bg-info text-white me-2 mb-2">с нуля</span>
//                     <div class="h4"><a class="link-dark stretched-link text-decoration-none" target="_blank" rel="noopener" href="#">Фронтенд-разработчик</a></div>
//                     <div class="text-muted">
//                       <span class="me-2">
//                         26 января
//                       </span>
//                       <span class="me-2">
//                         10 месяцев
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-6">
//                 <div class="card h-100">
//                   <div class="card-body">
//                     <div class="badge bg-light text-dark me-2 mb-2">Профессия</div>
//                     <span class="badge bg-info text-white me-2 mb-2">с нуля</span>
//                     <div class="h4"><a class="link-dark stretched-link text-decoration-none" target="_blank" rel="noopener" href="#">Node.js-разработчик</a></div>
//                     <div class="text-muted">
//                       <span class="me-2">
//                         26 января
//                       </span>
//                       <span class="me-2">
//                         10 месяцев
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-6">
//                 <div class="card h-100">
//                   <div class="card-body">
//                     <div class="badge bg-light text-dark me-2 mb-2">Профессия</div>
//                     <span class="badge bg-warning text-dark me-2 mb-2">Новый</span>
//                     <span class="badge bg-info text-white me-2 mb-2">с нуля</span>
//                     <div class="h4"><a class="link-dark stretched-link text-decoration-none" target="_blank" rel="noopener" href="#">Онлайн-буткемп. Фронтенд-разработчик</a></div>
//                     <div class="text-muted">
//                       <span class="me-2">
//                         9 февраля
//                       </span>
//                       <span class="me-2">
//                         4 месяца
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="tab-pane fade" id="secondary-python" role="tabpanel" aria-labelledby="secondary-python-list">
//             <div class="row" style="--bs-gutter-y: 1rem">
//               <div class="col-6">
//                 <div class="card h-100">
//                   <div class="card-body">
//                     <div class="badge bg-light text-dark me-2 mb-2">Профессия</div>
//                     <span class="badge bg-info text-white me-2 mb-2">с нуля</span>
//                     <div class="h4"><a class="link-dark stretched-link text-decoration-none" target="_blank" rel="noopener" href="#">Python-разработчик</a></div>
//                     <div class="text-muted">
//                       <span class="me-2">
//                         26 января
//                       </span>
//                       <span class="me-2">
//                         10 месяцев
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="tab-pane fade" id="secondary-ruby" role="tabpanel" aria-labelledby="secondary-ruby-list">
//             <div class="row" style="--bs-gutter-y: 1rem">
//               <div class="col-6">
//                 <div class="card h-100">
//                   <div class="card-body">
//                     <div class="badge bg-light text-dark me-2 mb-2">Профессия</div>
//                     <span class="badge bg-info text-white me-2 mb-2">с опытом</span>
//                     <div class="h4"><a class="link-dark stretched-link text-decoration-none" target="_blank" rel="noopener" href="#">Разработчик на Ruby on Rails</a></div>
//                     <div class="text-muted">
//                       <span class="me-2">
//                         26 января
//                       </span>
//                       <span class="me-2">
//                         5 месяцев
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </main>
//     </div>
//   </div>
//   <script type="module" src="7th_task.js"></script>
// </body>

// </html>
