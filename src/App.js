import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);
export default App;
