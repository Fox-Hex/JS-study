const capital = document.querySelector('[data-autocomplete-name="capital"]')
const country = document.querySelector('[data-autocomplete-name="country"]')

const listCapital = document.querySelector('ul[data-autocomplete-name="capital"]')
const listCountry = document.querySelector('ul[data-autocomplete-name="country"]')



console.log(capital.getAttribute('data-autocomplete'));
console.log(country.getAttribute('data-autocomplete'));
console.log(listCapital.innerHTML);
console.log(listCountry.innerHTML);



const response = await fetch(new URL('https://web-js-dom-ajax-5127456.evaluator7-5.hexlet.io/'))

console.log(response);