import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onStart, onReplay, isAnimating, currentStage }) => {
  const showStartButton = currentStage === 'solar-system' && !isAnimating;
  const showReplayButton = currentStage === 'map' && !isAnimating;

  return (
    <div className="control-panel">
      {showStartButton && (
        <button className="control-btn start-btn" onClick={onStart}>
          Start Journey
        </button>
      )}
      {showReplayButton && (
        <button className="control-btn replay-btn" onClick={onReplay}>
          Replay
        </button>
      )}
    </div>
  );
};

export default ControlPanel;
