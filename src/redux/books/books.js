import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'bookstore/books/GET';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OkbgJL1hxwuld1j7wBke/books';

const booksReducer = (state = [], action) => {
  let bookArr;
  switch (action.type) {
    case GET:
      return action.book;
    case ADD_BOOK:
      bookArr = [...state, action.id];
      return bookArr;
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (id) => ({
  type: ADD_BOOK,
  id,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBook = (id) => ({
  type: GET,
  id,
});

export const addNewBook = (book) => async (dispatch) => {
  const {
    title, author, id, category,
  } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category,
  };
  // post to the server
  await axios.post(baseURL, newBook);
  dispatch(addBook(book));
};

export const getBooksToDisplay = createAsyncThunk(GET, async () => {
  const books = await axios.get(baseURL);
  const objectOfBooks = Object.entries(books.data).map(([id, book]) => {
    const { title, author } = book[0];
    return { id, title, author };
  });

  return objectOfBooks;
});

export const removeBookFromList = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id}`);
  dispatch(removeBook(id));
};

export default booksReducer;
