const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const defaultState = [
  {
    title: 'Crime',
    author: 'John',
    id: 1,
  },
  {
    title: 'Crime2',
    author: 'Kiriamiti',
    id: 2,
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

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return [...state.filter((book) => (book !== action.payload))];

    default:
      return state;
  }
};

export default booksReducer;
