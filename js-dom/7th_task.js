const alertButton = document.getElementById('alert-generator')
let counter = 0
const handler = () => {
  counter += 1
  const newDiv = document.createElement('div')
  const container = document.querySelector('.m-5')
  newDiv.classList.add('alert', 'alert-primary')
  newDiv.append(`Alert ${counter}`)
  container.prepend(newDiv)
}

alertButton.addEventListener('click', handler)

// const handler2 = () => {
//   document.querySelector('.alert-primary').remove()
// }
// alertButton.addEventListener('mousedown', handler2)