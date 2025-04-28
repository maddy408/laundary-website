import React from 'react';
import '../Style/Servicecontent.css';
import Servicecard from './Servicecard';
import { Link } from 'react-router-dom';

const linkStyle = { color: 'white', textDecoration: 'none' };

const Servicescontent = () => {
  return (
    <div>
      <div className='aboutdiv1'>
        <div className='imgdiv'>
          <div className='overlay'></div>
          <img className='aboutimg' src="/allbackground.png" alt="Background" />
          <div className='text-container'>
            <h4 className='homeservice'>
              <Link to='/' style={linkStyle}>Home</Link> / <Link to='/service' style={linkStyle}>Services</Link>
            </h4>
            <h1 className='ourservice12'>OUR SERVICES</h1>
          </div>
        </div>
      </div>
      <Servicecard />
    </div>
  );
};

export default Servicescontent;
