const text = document.body.innerHTML
  .trim()
  .split('\n')
  .map(elem => '<p>' + elem.trim() + '</p>')
document.body.innerHTML = text.join('')