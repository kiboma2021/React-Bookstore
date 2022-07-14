import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';

const Home = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Books key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};
export default Home;
