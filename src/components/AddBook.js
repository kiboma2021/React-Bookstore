import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import newBook from '../redux/books/AddNewBook';
import { addBook } from '../redux/books/books';
import '../Styles/Addbook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(newBook(title, author)));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="Add-new-book">
      <h2 className="Add-tittle">ADD NEW BOOK</h2>
      <form onSubmit={onSubmit} className="form-container">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="input-book"
        />
        <input
          type="text"
          placeholder="Add author"
          name="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="input-author"
        />
        <button className="input-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
