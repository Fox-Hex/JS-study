const normalize = (countries) => {
  const norm = countries.map((elem) => {
    const name = elem.name.toLowerCase().trim()
    const country = elem.country.toLowerCase().trim()
    return {name, country}
  })
  console.table(norm);

  const set = new Set(norm.map(elem => elem.country))
  const val = Array.from(set)
  const val2 = Object.fromEntries(val.map(elem => [elem, []]))

  const a = {b:[]}
  console.log(a.b.push(1));
  return val2
}

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];
console.log(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
