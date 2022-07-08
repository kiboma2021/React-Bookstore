import React, { useState } from 'react';

const Books = () => {
  const { title, author } = useState();
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <ul>
        <li>Comment </li>
        <li>Remove </li>
        <li>Edit </li>
      </ul>
    </div>
  );
};

export default Books;
