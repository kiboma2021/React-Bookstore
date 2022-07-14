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

export const addBook = (id) => ({
  type: ADD_BOOK,
  id,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.id];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
