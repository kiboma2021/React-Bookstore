import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksToDisplay } from '../redux/books/books';
import Books from './Books';
import AddBook from './AddBook';

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksToDisplay(books));
  }, [dispatch]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Books key={book.id} id={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};
export default Home;
