import * as yup from 'yup';

const getInvalidBooks = (books) => {
  const shema = yup.object().shape({
  })

  return
}


const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];

const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]