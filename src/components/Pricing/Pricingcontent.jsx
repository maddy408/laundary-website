import React from 'react'
import '../Style/pricingcontent.css'
import Pricelist from './Pricelist'
import { Link } from 'react-router-dom'
const one={color:'white'}
const Pricingcontent = () => {
  return (
    <div>
        <div className='aboutdiv1'>
        <div className='imgdiv'>
        <div className='overlay'> </div>
      
      <img className='aboutimg' src="/allbackground.png" alt="" />
      <div className='text-container'>
      <h4 className='homeservice'><Link to='/' style={one}> Home</Link> /<Link to='/pricing' style={one}> Pricing</Link></h4>
      <h1 className='ourservice12'>LAUNDARY PRICING</h1></div>
      </div>
      
      <Pricelist/>
     </div>
    </div>
  )
}

export default Pricingcontent