import React from 'react';
import '../Style/abouttext.css';

const Abouttext = () => {
  return (
    <div>
      <div>
        <div className='aboutdiv11'>
          <div className='imgdiv'>
            <div className='overlay1'></div>
            <img className='aboutimg' src="/aboutbackimg.png" alt="" />
            <div className='text-container11'>
              <img  style={{ width: 30, height: 30 }} src="/Vector.png" alt="" />
              <h5 className='homeservice8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque
                placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
              </h5>
              <img style={{ width: 130, height: 2 }} src="/Vector 2.png" alt="" />
              <h4 className='ourservice0'>John Doe</h4>
              <img style={{ width: 60, height: 15 }} src="/Group 62.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouttext;
