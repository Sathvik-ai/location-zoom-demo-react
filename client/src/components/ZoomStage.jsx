import React, { useEffect } from 'react';
import './ZoomStage.css';
import SolarSystem from './SolarSystem';
import EarthGlobe from './EarthGlobe';
import MapView from './MapView';

const ZoomStage = ({ currentStage, userLocation, isAnimating, setLabelText, setShowLabel }) => {
  return (
    <div className="zoom-stage">
      <SolarSystem active={currentStage === 'solar-system'} />
      <EarthGlobe active={currentStage === 'earth'} />
      <MapView 
        active={currentStage === 'map'} 
        userLocation={userLocation}
        isAnimating={isAnimating}
        setLabelText={setLabelText}
        setShowLabel={setShowLabel}
      />
    </div>
  );
};

export default ZoomStage;
