import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {

  }, []);
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
