import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const bookprops = props;
  const { id, title, author } = bookprops;

  const handleRemove = (id) => {
    dispatch(removeBook(id));
    console.log(id);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={() => handleRemove(id)} type="button">Remove</button>
    </div>
  );
};

export default Books;
