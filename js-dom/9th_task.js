import {htmlEscape} from './escape-goat.js'


const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(event.target)

  const div = document.createElement('div')
  const p = document.createElement('p')
  const email = document.createElement('div')
  const name = document.createElement('div')
  const comment = document.createElement('div')

  p.innerHTML = 'Feedback has been sent'
  email.innerHTML = `Email: ${htmlEscape(data.get('email'))}`
  name.innerHTML = `Name: ${htmlEscape(data.get('name'))}`
  comment.innerHTML = `Comment: ${htmlEscape(data.get('comment'))}`

  div.append(p, email, name, comment)

  document.querySelector('.container').replaceWith(div)
})




// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//   <script type="module" src="9th_task.js" defer></script>
// </head>

// <body>

//   <div class="container m-3">
//     <h1>Feedback</h1>
//     <form class="feedback-form">
//       <div class="form-group row">
//         <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
//         <div class="col-sm-10">
//           <input type="email" class="form-control" name="email" id="inputEmail">
//         </div>
//       </div>
//       <div class="form-group row">
//         <label for="inputName" class="col-sm-2 col-form-label">Name</label>
//         <div class="col-sm-10">
//           <input type="text" name="name" class="form-control" id="inputName">
//         </div>
//       </div>
//       <div class="form-group row">
//         <label for="inputComment" class="col-sm-2 col-form-label">Comment</label>
//         <div class="col-sm-10">
//           <textarea class="form-control" name="comment" id="inputComment"></textarea>
//         </div>
//       </div>
//       <div class="form-group row">
//         <div class="col-sm-10">
//           <button type="submit" class="btn btn-primary">Send</button>
//         </div>
//       </div>
//     </form>
//     <script type="module" src="./src/index.js"></script>
//   </div>

// </body>

// </html>