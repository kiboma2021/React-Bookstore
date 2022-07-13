import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

/*
const mainReducer = combineReducers({
  books: booksReducer,
  states: statusReducer,
});

const store = configureStore(mainReducer);
export default store;
store.dispatch(booksReducer);
*/
export default configureStore({
  reducer: {
    books: booksReducer,
    states: statusReducer,
  },
});
