const companies = [
  { id: 1, name: 'Hexlet', description: 'online courses' },
  { id: 2, name: 'Google', description: 'search engine' },
  { id: 3, name: 'Facebook', description: 'social network' },
];

// const app = (companies) => {
//   const div = document.querySelector(".container");
  
//   const renderDescription = (name) => {
//     const newDescrContainer = document.createElement('div')
//     const activeDescrContainer = document.querySelector('div > div')
//     const descriptionText = companies.filter(elem => elem.name === name)[0].description
//     if (activeDescrContainer) {
//       if (activeDescrContainer.innerHTML === descriptionText) {
//       activeDescrContainer.remove('div')
//       } else {
//         activeDescrContainer.remove('div')
//         newDescrContainer.append(descriptionText)
//         div.append(newDescrContainer)
//       }
//     } else {
//       newDescrContainer.append(descriptionText)
//       div.append(newDescrContainer)
//     }
//   }
  
//   companies.forEach((elem) => {

//     const button = document.createElement("button");
//     button.classList.add("btn", "btn-primary");
//     button.innerHTML = elem.name;
//     div.append(button);

//     button.addEventListener("click", (e) => {
//       const name = e.target.innerHTML
//       renderDescription(name)
//     });

//   });
// };

const render = (state, container) => {
  container.innerHTML = ''
  const buttons = state.companies.map(({id, name}) => {
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-primary')
    button.textContent = name
    
    button.addEventListener('click', () => {
      const nextelectedId = state.uiState.selectedCompanyId === id ? null : id
      state.uiState.selectedCompanyId = nextelectedId
      render(state, container)
    })

    return button
  })

  container.append(...buttons)

  if (state.uiState.selectedCompanyId === null) {
    return
  }

  const outputContainer = document.createElement('div')
  const selectedCompany = state.companies.find((elem) => elem.id === state.uiState.selectedCompanyId)
  outputContainer.textContent = selectedCompany.description
  container.append(outputContainer)
}

const app = (companies) => {
  const state = {
    companies,
    uiState: {
      selectedCompanyId: null
    }
  }

  const container = document.querySelector('.container')

  render(state, container)
}

app(companies)



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <!-- Bootstrap CSS -->
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
//     integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container m-3"></div>
//   <script type="module" src="4th_task.js" defer></script>
// </body>

// </html>