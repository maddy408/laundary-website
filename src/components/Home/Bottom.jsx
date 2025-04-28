import React from 'react'
import '../Style/bottom.css'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Bottom = () => {
  return (
    <div>
      
      <div className='bottomdiv'>
        <img className='logo' src="/images/logo1.png" alt=""/>
        <h5 className='para'>Lorem Ipsum has been the industry's <br/> standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of<br/> type and scrambled it to make a type<br/> specimen book</h5>
          
      </div>
      <div className='maindiv1'>
        <div className='divone'>
            <h2>Support</h2>
            <ul className='ulof'>
            <li> Laundry Service</li>
            <li>Dry Cleaning</li>
            <li>Shoe Cleaning</li>
            <li>Home Cleaning</li>
            <li>Ironing</li></ul></div>
            <div className='divtwo'>
            <h2>Company</h2>
            <ul  className='ulof1'>
            <li><Link to='/'> Home</Link></li>
            <li> <Link to='/about'> About Us</Link></li>
            <li><Link to='/service'> Services</Link></li>
            <li><Link to='/pricing'> Pricing</Link> </li>
            <li><Link to='/contact'>  Contact</Link></li></ul></div>
            <div className='divthree'>
                <h2>LOREM IPSUM HAS BEEN</h2>
                <h5>Lorem Ipsum has been the<br/> industry's standard dummy</h5>
                <Button size='large' style={{ marginTop: 10, borderRadius: 2, backgroundColor: '#003366' }} variant="contained">LOREM IPSUM HA</Button>
                <div  className='icondiv'>
                <FacebookIcon size='small'/>
                <XIcon size='small'/>
                <InstagramIcon size='small'/>
                <YouTubeIcon size='small'/></div>
                <div className='finaldiv'>
                    <h5 className='leftside'>Lorem Ipsum has been the industry's standard dummy text ever since the </h5>
                    <h5 className='rightside'>Lorem Ipsum has been the industry's standard </h5>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Bottom