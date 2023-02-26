const extractData = (document) => {
  const title = document.querySelector('.content > h1').textContent
  const description = document.querySelector('.description').textContent
  const itemsArray = document.querySelectorAll('.links > div')
  const items = []
  itemsArray.forEach((elem) => {
    items.push({
      title: elem.querySelector('h2').textContent,
      description: elem.querySelector('p').textContent,
    })
  })
  return {title, description, items}
};

const data = extractData(document);
console.log(data);

