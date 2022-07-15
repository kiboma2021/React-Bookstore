import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OkbgJL1hxwuld1j7wBke/books';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  // eslint-disable-next-line consistent-return
  async () => {
    const response = await fetch(API_URL);
    if (response.ok) {
      const books = await response.json();
      return { books };
    }
  },
);

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

export const booksApp = createSlice({
  name: 'books',
  initialState: defaultState,
  extraReducers: {
    [getBooksAsync.fulfilled]: (state, action) => action.payload.books,
  },
});

export default booksReducer;
