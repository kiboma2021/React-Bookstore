import React from 'react';

const Books = (props) => {
  const bookprops = props;
  const { title, author } = bookprops;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};

export default Books;
