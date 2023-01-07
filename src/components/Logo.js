import React from 'react';
import Tilt from 'react-parallax-tilt';
import Starslogo from '../asset/stars.gif';
import './Logo.css';

const Logo = () => {
  return (
    <>
      <div className='ma4 mt0'>
        <Tilt
          className='tilt br2 shadow-2'
          style={{
            height: '150px',
            width: '150px',
          }}
        >
          <img
            alt='starslogo'
            src={Starslogo}
            style={{ paddingTop: '15px', height: '120px', width: '120px' }}
          />
        </Tilt>
      </div>
    </>
  );
};

export default Logo;
