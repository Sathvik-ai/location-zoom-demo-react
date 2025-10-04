import React, { useEffect, useState } from 'react';
import './SolarSystem.css';

const SolarSystem = ({ active, onTransitionComplete }) => {
  const [cameraAngle, setCameraAngle] = useState('top');

  useEffect(() => {
    if (active) {
      // Start with top view
      setCameraAngle('top');
      
      // After 3 seconds, transition to side view
      const timer = setTimeout(() => {
        setCameraAngle('side');
        
        // Notify parent after transition completes
        if (onTransitionComplete) {
          setTimeout(() => onTransitionComplete(), 2000);
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [active, onTransitionComplete]);

  return (
    <div className={`zoom-layer solar-system ${active ? 'active' : ''} ${cameraAngle}`}>
      <div className="solar-system-content">
        <div className="sun"></div>
        
        {/* Mercury */}
        <div className="orbit orbit-1">
          <div className="planet planet-mercury"></div>
        </div>
        
        {/* Venus */}
        <div className="orbit orbit-2">
          <div className="planet planet-venus"></div>
        </div>
        
        {/* Earth */}
        <div className="orbit orbit-3">
          <div className="planet planet-earth">
            <div className="earth-glow"></div>
          </div>
        </div>
        
        {/* Mars */}
        <div className="orbit orbit-4">
          <div className="planet planet-mars"></div>
        </div>
        
        {/* Jupiter */}
        <div className="orbit orbit-5">
          <div className="planet planet-jupiter"></div>
        </div>
        
        {/* Saturn */}
        <div className="orbit orbit-6">
          <div className="planet planet-saturn">
            <div className="saturn-ring"></div>
          </div>
        </div>
        
        {/* Uranus */}
        <div className="orbit orbit-7">
          <div className="planet planet-uranus"></div>
        </div>
        
        {/* Neptune */}
        <div className="orbit orbit-8">
          <div className="planet planet-neptune"></div>
        </div>
        
        {/* Pluto (dwarf planet) */}
        <div className="orbit orbit-9">
          <div className="planet planet-pluto"></div>
        </div>
        
        <div className="stars"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
