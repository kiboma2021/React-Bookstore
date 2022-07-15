import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const bookprops = props;
  const { id, title, author } = bookprops;

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="display-book">
      <div className="books-uppersection">
        <p>Science</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div className="books-lowersection">
        <button type="button" className="bookdisplay-btn">Comments</button>
        <button onClick={() => handleRemove(id)} type="button">Remove</button>
        <button type="button" className="bookdisplay-btn">Edit</button>
      </div>
    </div>
  );
};

export default Books;
