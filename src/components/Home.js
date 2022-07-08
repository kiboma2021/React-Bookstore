import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const books = [{
  title: 'Fifty Shades of Blue',
  author: 'Fabien',
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