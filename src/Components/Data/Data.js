import React from 'react';
import document from '../../images/icon-document.svg';
import folder from '../../images/icon-folder.svg';
import upload from '../../images/icon-upload.svg';
import logo from '../../images/logo.svg';

import ProgressBar from '../ProgressBar/ProgressBar';
import GBleft from '../GBleft/GBleft';

import './Data.css';


export default function Data() {
  return (
    <div className='data'>
      {/* <img src={document} className='doc-image' alt='document' />
      <img src={folder} className='doc-folder' alt='folder' />
      <img src={upload} className='doc-upload' alt='upload' />
      <img src={logo} className='doc-logo' alt='logo' /> */}
      <div className='inner-data'>
        <div className='fylo-div'>
          <div className='logo-fylo'>
            <img src={logo} className='logo' alt='logo' />
          </div>
          <div className='document-folder-upload-div'>
            <div className='icon-div'>
              <img src={document} className='icon doc-image' alt='document' />
            </div>

            <div className='icon-div'>
              <img src={folder} className='icon doc-folder' alt='folder' />
            </div>

            <div className='icon-div'>
              <img src={upload} className='icon doc-upload' alt='upload' />
            </div>

          </div>
        </div>
        <div className='progress-bar-div'>
          <div className='inner-progress-bar-div'>
            <h4 className='youve-used'>You've used <span className='gb'>815 GB</span> of your storage</h4>
            <ProgressBar valuePercentage={81.5} />
            <div className='gb-range'>
              <h4 className='lower'>0 GB</h4>
              <h4 className='upper'>1000 GB</h4>
            </div>

            <GBleft />

            {/* <div className='gb-left'>
              <div className='inner-gb-left'>
                <h1 className='number'>
                  <span className='digit one'>1</span>
                  <span className='digit eight'>8</span>
                  <span className='digit five'>5</span>
                </h1>
                <h4 className='left'>GB LEFT</h4>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}