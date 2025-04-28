import '../Style/service.css';
import HomeCard from './HomeCard';
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate(); 

  const cardsData = [
    { title: "WOMEN", description: "Lorem Ipsum is simply.", imageUrl: "./card1.png",path:'/women' },
    { title: "MEN", description: "Lorem Ipsum is simply.", imageUrl: "./card2.png" },
    { title: "KIDS", description: "Lorem Ipsum is simply.", imageUrl: "./card3.png" },
    { title: "BEDSHEET", description: "Lorem Ipsum is simply.", imageUrl: "./card4.png" },
    { title: "CURTAINS", description: "Lorem Ipsum is simply.", imageUrl: "./card5.png" },
    { title: "SHOES", description: "Lorem Ipsum is simply.", imageUrl: "./card6.png" },
    { title: "LOREM", description: "Lorem Ipsum is simply.", imageUrl: "./card7.png" },
    { title: "LOREM", description: "Lorem Ipsum is simply.", imageUrl: "./card8.png" },
  ];

  return (
    <div className='servicediv'>
      <h1 className='service'>Services</h1>
      <h5 className='subservicehead'>Lorem Ipsum has been the industry's standard dummy text</h5>
      <div  className='card-container'>
        {cardsData.map((card, index) => (
            <div 
            key={index} 
            onClick={() => card.path && navigate(card.path)} 
            style={{ cursor: card.path ? 'pointer' : 'default' }} className="card"
          >
          <HomeCard key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
     </div>
        ))}
      </div>
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          typography: 'body1',
          '& > :not(style) ~ :not(style)': {
            ml: 2,
          },
        }}
      >
        <Link className='see'
          onClick={(event) => {
            event.preventDefault(); 
            navigate("/service"); 
          }}
        
          underline="always"

          sx={{
            mt: {
              xs: 4,
              sm: 6,
              md: 8,
            },
            textAlign: 'center',
            mx: {
              xs: 'auto', 
              sm: 'auto',
              md: 'auto',
              lg: 0,      
            },
            display: 'block',
            fontSize: {
              xs: '12px',
              sm: '14px',
              md: '16px',
            },
            fontWeight: 'bold',
            color: 'black',
          }}
        >
        
          SEE MORE
        </Link>
      </Box>
    </div>
  );
};

export default Service;
