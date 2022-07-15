import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const books = useSelector((state) => state.books);
  return (
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">
            BOOKS(
            { books.length }
            )
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
