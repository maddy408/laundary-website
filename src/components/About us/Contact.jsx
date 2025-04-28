
import React from 'react';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import '../Style/contact.css'

const Contact = () => {
  return (
    <div>
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact</h1>
        <h4>GET IN TOUCH</h4>
      </div>

      {/* Container for Cards */}
      <div className="contact-container">
        {/* Emergency Contact */}
        <div className="contact-box">
          <PhoneInTalkIcon className="icon" />
          <h3>EMERGENCY</h3>
          <h5 style={{marginTop:-10}}>(237) 681-812-255 <br/>(237) 666-331-894</h5>
        </div>

        {/* Location */}
        <div className="contact-box orange-box">
          <LocationOnIcon className="icon black-icon" />
          <h3 className="black-text">LOCATION</h3>
          <h5 className="black-text" style={{marginTop:-10}}>0123 Some place <br/>9876 Some country</h5>
        </div>

        {/* Email */}
        <div className="contact-box">
          <EmailIcon className="icon" />
          <h3>EMAIL</h3>
          <h5 style={{marginTop:-10}}>fildineeesoe@gmail.com <br/>myebstudios@gmail.com</h5>
        </div>

        {/* Working Hours */}
        <div className="contact-box">
          <AccessTimeIcon className="icon" />
          <h3>WORKING HOURS</h3>
          <h5 style={{marginTop:-10,}}>Mon-Sat 09:00-20:00 <br/>Sunday Emergency only</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;





