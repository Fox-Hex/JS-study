const app = () => {
  const result = document.getElementById('result')
  const button = document.querySelector('#increment')

  button.addEventListener('click', () => {
    result.textContent = parseInt(result.textContent, 10) +1
  })
}

const articleCount = () => {
  const articles = document.querySelectorAll('.article')
  return articles.length
}


app()
document.querySelector('#articleCount').innerHTML = `count of articles: ${articleCount()}`