import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksApi } from '../redux/books/books';
import Books from './Books';
import AddBook from './AddBook';
import '../Styles/Home.css';

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksApi());
  }, []);

  return (
    <div className="home-page">
      <ul>
        {books.map((book) => (
          <Books
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};
export default Home;
