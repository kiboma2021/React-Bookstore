import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <nav>
      <div className="left-nav">
        <div>
          <h1>Bookstore CMS</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">
              BOOKS(
              {books.length}
              )
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
