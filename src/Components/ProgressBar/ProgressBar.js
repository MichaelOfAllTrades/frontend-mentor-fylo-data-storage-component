import React from 'react';
import './ProgressBar.css';

// https://anrusina.medium.com/react-simple-gradient-progress-bar-778d861ec38d
// https://codesandbox.io/s/progresbar10-d3htn?from-embed=&file=/src/App.tsx
export default function ProgressBar({ valuePercentage }) {
  const fillerRelativePercentage = (100 / valuePercentage) * 100;
  return (
    <div
      className='wrapper'
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valuePercentage}>
      <div className="barContainer">
        <div className="filler" style={{ width: `${valuePercentage}%` }}>
          <div
            className="fillerBackground"
            style={{ width: `${fillerRelativePercentage}%` }}
          />
        </div>
      </div>
      {/* <div className="textValue">{`${valuePercentage}%`}</div> */}
    </div>
  );
}