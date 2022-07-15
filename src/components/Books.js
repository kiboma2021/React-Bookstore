import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../Styles/BookList.css';

const Books = (props) => {
  const dispatch = useDispatch();
  const bookprops = props;
  const { id, title, author } = bookprops;

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const randomperc1 = Math.floor(Math.random() * 100);
  const randomchapter = Math.floor(Math.random() * 35);
  const booktypes = ['Action', 'Science Fiction', 'Economy', 'Mathematics', 'Geography'];

  return (
    <div className="display-book">
      <div className="book-details">
        <div className="books-uppersection">
          <p>{booktypes[Math.floor(Math.random() * booktypes.length)]}</p>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className="books-lowersection">
          <button type="button" className="bookdisplay-btn">Comments</button>
          <button onClick={() => handleRemove(id)} type="button">Remove</button>
          <button type="button" className="bookdisplay-btn">Edit</button>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-chart" style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={randomperc1} />
        </div>
        <div>
          <p>
            {randomperc1}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="progress-chapter">
        <p>CURRENT CHAPTER</p>
        <p>
          Chapter
          {randomchapter}
        </p>
        <button type="button" className="updateprogress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Books;
