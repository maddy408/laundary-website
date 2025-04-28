import React from 'react';
import '../Style/aboutwash.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const Aboutwash = () => {
  return (
    <div className='aboutwashdiv'>
      <h1 className='heading'>Meet Smart Wash Laundry</h1>
      <h5 className='subheading1'>
        Get introduced to hassle-free laundry and dry cleaning services that add time to your life.
      </h5>

      <div className='total'>
        <div className='aboutimg1'>
          <img className='machineimg' src="/aboutmachine.png" alt="Machine" />
          <img className='machineimg1' src="/aboutwomen.png" alt="Woman" />
        </div>

        <div className='content'>
          <div className="iconTextGroup">
            <LocationOnIcon className="locationIcon" />
            <h2 className='h2div'>Who are We?</h2>
          </div>
          <h5 className='h5div'>
            Smart wash Laundry is an initiative that takes pride in offering customers a never-before laundry experience...
          </h5>

          <div className="iconTextGroup">
            <BusinessIcon className="businessicon" />
            <h2 className='hdiv'>What do we do?</h2>
          </div>
          <h5 className='h5div'>
            We offer hassle-free doorstep laundry and dry cleaning that goes beyond just washing and drying...
          </h5>

          <div className="iconTextGroup">
            <TouchAppIcon className="touchappicon" />
            <h2 className='h6div'>What are our strengths?</h2>
          </div>
          <h5 className='h5div' style={{ marginBottom: -70 }}>
            Headed by experts and backed by decades in the home appliance sector...
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Aboutwash;
