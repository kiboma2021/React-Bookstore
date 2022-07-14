import React from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleCategories = () => {
    dispatch(status);
  };

  return (
    <div>
      <button onClick={handleCategories} type="button">Check Status</button>
    </div>
  );
};

export default Categories;
