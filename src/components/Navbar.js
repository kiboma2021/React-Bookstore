import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <nav>
      <div className="left-nav">
        <div className="logo">
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
      <div className="right-nav">
        <div className="avatar">
          <AccountCircleIcon fontSize="large" sx={{ color: '#0290ff' }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
