import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const books = [{
  title: 'My Life in Crime',
  author: 'John Kiriamiti',
  id: 1,
}];

const Home = () => (
  <div>
    <ul>
      {books.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
    <AddBook />
  </div>
);
export default Home;
