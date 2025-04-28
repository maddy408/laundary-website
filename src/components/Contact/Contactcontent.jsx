import React from 'react'
import Contactmap from './Contactmap'
import '../Style/contactpage.css'
import Contact from '../About us/Contact'
import { Link } from 'react-router-dom'
const col={
  color:'white'
}
const Contactcontent = () => {
  return (
    <div>
         
        <div className='aboutdiv1'>
        <div className='imgdiv'>
        <div className='overlay'> </div>
      
      <img className='aboutimg' src="/allbackground.png" alt="" />
      <div className='text-container'>
      <h4 className='homeservice'><Link to='/' style={col}> Home</Link> /<Link to='/contact' style={col}>  Contact</Link></h4>
      <h1 className='ourservice12' >OUR CONTACT</h1></div>
      </div>
     </div>
     <Contactmap/> 
      <Contact/>
    </div>
  )
}

export default Contactcontent