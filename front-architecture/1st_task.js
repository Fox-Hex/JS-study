const app = () => {
  const form = document.querySelector('form')
  const field = document.querySelector('[type="number"]')
  const plusButton = document.querySelector('[type="submit"]')
  const resetButton = document.querySelector('[type="button"]')
  const resultCounter = document.querySelector('#result')
  
  let result = 0
  
  field.focus()
  
  plusButton.addEventListener('click', (e) => {
    e.preventDefault()
    result += parseInt(field.value, 10)
    resultCounter.textContent = result
    form.reset()
    field.focus()
  })
  
  resetButton.addEventListener('click', () => {
    result = 0
    resultCounter.textContent = result
    form.reset()
    field.focus()
  })
}

app()


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>front-architectrure</title>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
//     integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
//   <script src="1st_task.js" defer></script>
// </head>
// <body>
//   <div class="container m-3">
//     <form class="form-inline">
//       <input type="number" required="required" class="form-control mr-3" name="number">
//       <input type="submit" class="btn btn-primary mr-3" value="plus">
//       <button type="button" class="btn btn-outline-primary">reset</button>
//     </form>
//     <div id="result">0</div>
//   </div>
// </body>
// </html>