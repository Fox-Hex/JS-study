const companies = [
  { id: 1, name: 'Hexlet', description: 'online courses' },
  { id: 2, name: 'Google', description: 'search engine' },
  { id: 3, name: 'Facebook', description: 'social network' },
];

const app = (companies) => {
  const div = document.querySelector(".container");
  
  const renderDescription = (name) => {
    const desc = document.createElement('div')
    desc.append((companies.filter(elem => elem.name === name)).description)
    div.append(desc)
  }

  companies.forEach((elem) => {

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerHTML = elem.name;
    div.append(button);


    button.addEventListener("click", (e) => {
      const name = e.target.innerHTML
      renderDescription(name)
    });

  });
};

app(companies)