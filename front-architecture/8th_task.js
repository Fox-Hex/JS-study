import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

// urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required('email must be a valid email').email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

// BEGIN (write your solution here)
export default () => {
  const form = document.querySelector('form')
  const button = form.querySelector('[type="submit"]')
  const inputs = form.querySelectorAll('input')
  const container = form.parentNode

  // Model
  const state = {
    data: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    process: 'filling',
    errors: [],
  }


  // View
  const watchedState = onChange(state, () => {
    const errors = validate(state.data)
    state.errors = []

    inputs.forEach((inp) => {
      inp.classList.remove('is-invalid')
      const div = inp.parentNode.querySelector('.invalid-feedback')
      if (div) {
        div.remove()
      }
    })

    Object.entries(errors).forEach((err) => {
      state.errors.push(err[1].message)
      inputs.forEach((inp) => {
        if (inp.name === err[0]) {
          inp.classList.add('is-invalid')
          const div = document.createElement('div')
          div.classList.add('invalid-feedback')
          div.append(err[1].message)
          inp.parentNode.append(div)
        }
      })
    })

    if (state.errors.length > 0 || state.process === 'sending') {
      button.disabled = true
    } else {
      button.disabled = false
    }

    if(state.process === 'done') {
      container.textContent = 'User Created!'
    }
  })


  // Control
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    watchedState.process = 'sending'
    
    await axios.post(routes.usersPath(), state.data)
      .then((response) => {
        watchedState.process = 'done'
      })
      .catch((e) => {
        errorMessages.network.error = e.message
        watchedState.process = 'filling'
      })
  })

  inputs.forEach((elem) => {
    elem.addEventListener('input', (e) => {
      watchedState.data[elem.name] = e.target.value
    })
  })
}





// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <!-- Bootstrap CSS -->
//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container mt-5">
//     <div class="row">
//       <div class="col-sm-8 col-12">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">Sign up</h5>
//             <div data-container="sign-up">
//               <form data-form="sign-up" method="post">
//                 <div class="form-group">
//                   <label for="sign-up-name">Name</label>
//                   <input id="sign-up-name" required type="text" class="form-control" name="name">
//                 </div>
//                 <div class="form-group">
//                   <label for="sign-up-email">Email<sup>*</sup></label>
//                   <input id="sign-up-email" required type="email" class="form-control" name="email">
//                 </div>
//                 <div class="form-group">
//                   <label for="sign-up-password">Password<sup>*</sup></label>
//                   <input id="sign-up-password" required type="password" class="form-control" name="password">
//                 </div>
//                 <div class="form-group">
//                   <label for="sign-up-password-confirmation">Password Confirmation<sup>*</sup></label>
//                   <input id="sign-up-password-confirmation" required type="password" class="form-control"
//                     name="passwordConfirmation">
//                 </div>
//                 <input type="submit" class="btn btn-primary" value="Submit" disabled>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <script type="module" src="./src/index.js" ></script>
// </body>

// </html>