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
  const randomchapter = Math.floor(Math.random() * 30) + 5;
  const booktypes = ['Action', 'Science Fiction', 'Economy', 'Mathematics', 'Geography'];

  return (
    <div className="display-book">
      <div className="book-details">
        <div className="books-uppersection">
          <p className="book-type">{booktypes[Math.floor(Math.random() * booktypes.length)]}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <div className="books-lowersection">
          <button type="button" className="bookdisplay-btn">Comments</button>
          <div className="line" />
          <button onClick={() => handleRemove(id)} type="button" className="bookdisplay-btn">Remove</button>
          <div className="line" />
          <button type="button" className="bookdisplay-btn">Edit</button>
        </div>
      </div>
      <div className="progress-side">
        <div className="progress-bar">
          <div className="progress-chart" style={{ width: 80, height: 80 }}>
            <CircularProgressbar value={randomperc1} />
          </div>
          <div>
            <p className="progress-percentage">
              {randomperc1}
              %
            </p>
            <p className="progress-completed">Completed</p>
          </div>
        </div>
        <div className="line2" />
        <div className="progress-chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">
            Chapter
            { randomchapter }
          </p>
          <button type="button" className="updateprogress-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
