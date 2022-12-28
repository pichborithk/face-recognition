import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <>
      <p className='f3 white'>
        {'This App can detect faces in your pictures. Give it a try'}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5 zindex'>
          <input className='f4 pa2 w-70 center' type='text' />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green pointer'>
            Detect
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
