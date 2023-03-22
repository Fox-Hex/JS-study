const app = () => {
  const result = document.getElementById('result')
  const button = document.querySelector('#increment')

  button.addEventListener('click', () => {
    result.textContent = parseInt(result.textContent, 10) +1
  })
}

app()