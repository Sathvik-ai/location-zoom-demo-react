import React, { useState, useEffect } from 'react';
import './App.css';
import ZoomStage from './components/ZoomStage';
import ControlPanel from './components/ControlPanel';
import ZoomLabel from './components/ZoomLabel';

function App() {
  const [currentStage, setCurrentStage] = useState('solar-system'); // solar-system, earth, map
  const [isAnimating, setIsAnimating] = useState(false);
  const [labelText, setLabelText] = useState('Starting from the Solar System...');
  const [showLabel, setShowLabel] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user location on mount
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to center of India
          setUserLocation({
            lat: 20.5937,
            lon: 78.9629
          });
        }
      );
    } else {
      console.error('Geolocation not supported');
      setUserLocation({
        lat: 20.5937,
        lon: 78.9629
      });
    }
  };

  const startJourney = () => {
    setIsAnimating(true);
    setCurrentStage('solar-system');
    animateSequence();
  };

  const animateSequence = async () => {
    // Solar System stage - Top view
    setLabelText('Viewing Solar System from above...');
    setShowLabel(true);
    await delay(3000);

    // Solar System transitions to side view
    setLabelText('Rotating to side view...');
    await delay(2000);
    
    // Focus on Earth
    setLabelText('Focusing on Earth...');
    await delay(2000);

    // Transition to Earth globe
    setLabelText('Approaching Earth...');
    await delay(1000);
    setCurrentStage('earth');
    await delay(3000);

    // Entering atmosphere
    setLabelText('Entering atmosphere...');
    await delay(1500);
    setCurrentStage('map');
    await delay(1000);

    setIsAnimating(false);
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const resetJourney = () => {
    setCurrentStage('solar-system');
    setIsAnimating(false);
    setShowLabel(false);
    setLabelText('Starting from the Solar System...');
  };

  return (
    <div className="App">
      <ZoomStage 
        currentStage={currentStage} 
        userLocation={userLocation}
        isAnimating={isAnimating}
        setLabelText={setLabelText}
        setShowLabel={setShowLabel}
      />
      <ZoomLabel text={labelText} show={showLabel} />
      <ControlPanel 
        onStart={startJourney}
        onReplay={resetJourney}
        isAnimating={isAnimating}
        currentStage={currentStage}
      />
    </div>
  );
}

export default App;
