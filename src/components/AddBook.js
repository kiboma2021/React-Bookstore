import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewBook({
      title,
      author,
      id: Date.now(),
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
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
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
