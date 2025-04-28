import React from 'react'
import '../Style/aboutcontent.css'
import Aboutwash from './Aboutwash'
import Abouttext from './Abouttext'
import Contact from './Contact'
import { Link } from 'react-router-dom'
const linkStyle = {
  color: 'white',
 
};
const Aboutcontent = () => {
  return (
    <div>
        <div className='aboutdiv1'>
        <div className='imgdiv'>
        <div className='overlay'> </div>
      
      <img className='aboutimg' src="/allbackground.png" alt="" />
      <div className='text-container'>
      <h4 className='homeservice'><Link to='/' style={linkStyle}> Home</Link> /<Link to='/about' style={linkStyle}> About</Link> </h4>
      <h1 className='ourservice12'>ABOUT US</h1></div>
      </div>
     </div>
     <Aboutwash/>
     <Abouttext/>
     <Contact/>
    </div>
  )
}

export default Aboutcontent