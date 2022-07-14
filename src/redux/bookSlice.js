/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
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
  ],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(newBook);
    },
  },
});

export const { newBook } = bookSlice.actions;
export default bookSlice.reducer;
