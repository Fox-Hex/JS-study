normalize = (countries) => {
  const norm = countries.map((elem) => {
    name = elem.name.toLowerCase().trim()
    country = elem.country.toLowerCase().trim()
    return {name, country}
  })
  console.table(norm);

  // const set = new Set(norm.map(elem => elem.country))
  // const val = Array.from(set)
  // console.log(val);


}

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];
console.table(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
