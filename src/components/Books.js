import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromList } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const bookprops = props;
  const { id, title, author } = bookprops;

  const handleRemove = (id) => {
    dispatch(removeBookFromList(id));
  };

  return (
    <div>
      <li id={id}>
        <h2>{title}</h2>
        <p>{author}</p>
        <button id={id} onClick={() => handleRemove(id)} type="button">Remove</button>
      </li>
    </div>
  );
};

export default Books;
