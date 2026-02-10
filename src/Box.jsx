import React from 'react';
import './Box.css';

const Box = ({ subjectCode }) => {
  return (
    <div className="box">
      {subjectCode}
    </div>
  );
};

export default Box;
