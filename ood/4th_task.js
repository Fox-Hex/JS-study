const normalize = (countries) => {  
  const normArray = countries.map((elem) => {
    const name = elem.name.toLowerCase().trim()
    const country = elem.country.toLowerCase().trim()
    return {name, country}
  })

  const uniqCountries = [... new Set(normArray.map(elem => elem.country))]

  const result = uniqCountries.reduce((acc, cur) => {
    acc[cur] = normArray
      .filter(elem => elem.country === cur)
      .map(elem => elem.name)
      .sort()
      .filter((elem, i, arr) => arr.indexOf(elem) === i)
    return acc
  }, {})
  
  return result
}
const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
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
