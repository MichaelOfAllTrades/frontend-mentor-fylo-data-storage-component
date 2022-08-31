import React from 'react';
import './GBleft.css';

export default function GBleft() {
  return (
    <div className='gb-left'>
      <div className='inner-gb-left'>
        <h1 className='number'>
          <span className='digit one'>1</span>
          <span className='digit eight'>8</span>
          <span className='digit five'>5</span>
        </h1>
        <h4 className='left'>GB LEFT</h4>
      </div>
      <div className='triangle'></div>
    </div>
  );
}