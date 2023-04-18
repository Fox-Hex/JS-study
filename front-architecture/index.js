// const app = () => {
//   const result = document.getElementById('result')
//   const button = document.querySelector('#increment')

//   button.addEventListener('click', () => {
//     result.textContent = parseInt(result.textContent, 10) +1
//   })
// }

// const articleCount = () => {
//   const articles = document.querySelectorAll('.article')
//   return articles.length
// }


// app()
// document.querySelector('#articleCount').innerHTML = `count of articles: ${articleCount()}`


// const app = () => {
//   const state = {
//     registrationForm: {
//       valid: null,
//       errors: [],
//     },
//   };
  
//   const input = document.querySelector(".phone");
//   const submit = document.querySelector(".submit");
  
//   input.addEventListener("keyup", (e) => {
//     const inputValue = e.target.value;
  
//     state.registrationForm.value = inputValue;
  
//     if (inputValue.match(/^\d+$/)) {
//       state.registrationForm.valid = true;
//       state.registrationForm.errors = [];
//     } else {
//       state.registrationForm.valid = false;
//       state.registrationForm.errors.push("wrong format");
//     }
  
//     submit.disabled = !state.registrationForm.valid;
  
//     if (state.registrationForm.valid) {
//       input.style.border = null;
//     } else {
//       input.style.border = "thick solid red";
//     }
//   });  
// }

// app()


// import onChange from "./src/on-change.js"

// const app = () => {
//   const state = {
//     value: 0
//   }

//   const result = document.querySelector('#result')

//   const render = (path, value) => {
//     result.textContent = value
//   }

//   const watchedState = onChange(state, render)

//   const incHandler = () => {
//     watchedState.value += 1
//   }

//   const decHandler = () => {
//     watchedState.value -= 1
//   }

//   const inc = document.querySelector('#increment')
//   inc.addEventListener('click', incHandler)

//   const dec = document.querySelector('#decrement')
//   dec.addEventListener('click', decHandler)

// }

// app()




// const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const formData = new FormData(e.target)
// })




// import onChange from "./src/on-change.js"

// // Model
// const state = {
//   regForm: {
//     state: 'valid',
//     data: {
//       name: '',
//       email: '',
//     },
//     errors: []
//   }
// }

// // View
// const name = document.querySelector('#name')
// const email = document.querySelector('#email')
// const watchedState = onChange(state, (path, value) => {
//   if (path === 'regForm.state') {
//     if (value === 'invalid') {
//       console.log(state.regForm.errors);
//     }
//   }
//   name.innerHTML = `name: ${state.regForm.data.name}`
//   email.innerHTML = `email: ${state.regForm.data.email}`
// })

// // Control
// const form = document.querySelector('form')
// form.elements.name.addEventListener('input', (e) => {
//   watchedState.regForm.data.name = e.target.value
// })
// form.elements.email.addEventListener('input', (e) => {
//   watchedState.regForm.data.email = e.target.value
// })


import i18next from 'https://deno.land/x/i18next/index.js'

const app = async () => {
  await i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru: {
        translation: {
          greeting: 'Привет! {{name}}',
          goodbye: 'Пока!',
          signupForm: {
            name: 'Вася',
            email: 'vasya@noproblem.ru'
          },
          key_one: '{{count}} балл',
          key_few: '{{count}} балла',
          key_many: '{{count}} баллов',
        }
      }
    }
  })

  console.log(i18next.t('greeting', {name: 'юзер'}));
  console.log(i18next.t('goodbye'));
  console.log(i18next.t('signupForm.name'));
  console.log(i18next.t('signupForm.email'));
  console.log(i18next.t('key', {count: 1}));
  console.log(i18next.t('key', {count: 2}));
  console.log(i18next.t('key', {count: 256}));
}

app()