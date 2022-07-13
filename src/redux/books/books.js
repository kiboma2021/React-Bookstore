const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DEFAULT_STATE = [
  {
    title: 'My Life in crime',
    author: 'John Kiriamiti',
    id: 1,
  },
  {
    title: 'Tink Big',
    author: 'Ben Carson',
    id: 2,
  },
  {
    title: 'Bad Omen',
    author: 'Jonstone Jonathan',
    id: 3,
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const booksReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => (book !== action.payload));

    default:
      return state;
  }
};

export default booksReducer;
