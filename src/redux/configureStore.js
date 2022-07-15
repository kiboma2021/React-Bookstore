import { configureStore } from '@reduxjs/toolkit';
import booksApp from './books/books';
import categoriesReducer from './categories/categories';

const reducer = {
  status: categoriesReducer,
  books: booksApp,
};

const store = configureStore({ reducer });
export default store;
