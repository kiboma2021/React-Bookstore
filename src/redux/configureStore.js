import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  states: statusReducer,
});

const store = configureStore(mainReducer);

store.dispatch(booksReducer);
