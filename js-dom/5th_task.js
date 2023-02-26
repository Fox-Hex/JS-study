const prettify = (doc) => {
  const body = doc.body
  const divArray = body.querySelectorAll('div')

  divArray.forEach((elem)=>{

    elem.childNodes.forEach((child)=>{

      if (child instanceof Text) {
        const p = document.createElement('p')
        if (child.textContent.trim() !== '') {

          p.append(child.textContent)
          child.replaceWith(p)
        }
      }
      
    })
  })
}

prettify(document);
// console.log(document.body.innerHTML);