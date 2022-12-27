import * as yup from 'yup';

const getInvalidBooks = (books) => {
  const shema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer(),
    link: yup.string().url(),
    genre: yup.string().oneOf(genres)
  })

  return books.map(elem => shema.validateSync(elem))
}

// name – строка, обязательное
// author – строка, обязательное
// pagesCount – положительное число, необязательное
// link – строка url, необязательное, не может быть пустой строкой; ссылка на книгу в интернете
// genre – строка, необязательное; жанр книги. Должен входить в список определенный в файле index.js

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];

const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
console.log(invalidBooks);