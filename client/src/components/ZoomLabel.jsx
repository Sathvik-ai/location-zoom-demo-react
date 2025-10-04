import React from 'react';
import './ZoomLabel.css';

const ZoomLabel = ({ text, show }) => {
  return (
    <div className={`zoom-label ${show ? 'visible' : ''}`}>
      {text}
    </div>
  );
};

export default ZoomLabel;
