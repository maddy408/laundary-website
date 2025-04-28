import React from 'react'
import Womencard from './Womencard'
import { Link } from 'react-router-dom'

const linkStyle = {
  color: 'white',
 
};
const Womencontent = () => {
  return (
    <div>
         
        <div className='aboutdiv1'>
        <div className='imgdiv'>
        <div className='overlay'> </div>
      
      <img className='aboutimg' src="/allbackground.png" alt="" />
      <div className='text-container'>
      <h4 className='homeservice' style={{color:'white'}}><Link to='/' style={linkStyle}> Home</Link> / <Link to='/service' style={linkStyle}>  Services</Link> / <Link to='/women' style={linkStyle}> Women</Link></h4>
      <h1 className='ourservice5' >WOMEN LAUNDARY LIST</h1></div>
      </div>
     </div>
     <Womencard/>
    </div>
  )
}

export default Womencontent