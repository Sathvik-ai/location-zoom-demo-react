import React from 'react';
import './EarthGlobe.css';

const EarthGlobe = ({ active }) => {
  return (
    <div className={`zoom-layer earth-globe ${active ? 'active' : ''}`}>
      <div className="earth-container">
        <div className="earth">
          <div className="earth-surface"></div>
          <div className="clouds"></div>
          <div className="atmosphere"></div>
        </div>
      </div>
    </div>
  );
};

export default EarthGlobe;
