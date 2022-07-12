const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  id: addBook.id,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  id: addBook.id,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.id];

    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));

    default:
      return state;
  }
};
