import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

export default configureStore({
  reducer: {
    books: booksReducer,
    states: statusReducer,
  },
});
