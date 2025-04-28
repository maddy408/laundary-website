


import '../Style/screen.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@mui/icons-material/Shop';
export default function Screen() {
    return (
        <div className='maindiv'>
            <div className="src" >
                <h1 className="heading1" > Get Your Clothes Cleaned, With 
                    Just A Trap Of Finger</h1>  <div className='buttons'>
                    <Stack
                    direction={'row'}
        spacing={2}
        
      >
        <Button
          sx={{
            textAlign:{xs:1,md:1},
            borderRadius: 2,
            backgroundColor: 'white',
            width: 200,
            height: 50,
            color: 'black',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          variant="outlined"
        >
          <AppleIcon sx={{ mr: 1 }} />
          App Store
        </Button>

        <Button
          sx={{
            borderRadius: 2,
            backgroundColor: 'white',
            width: 200,
            height: 50,
            color: 'black',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          variant="outlined"
        >
          <ShopIcon sx={{ mr: 1 }} />
          Google Play
        </Button>
      </Stack>
                    <h5 className='availablediv'>Available on Play Store and iOS App Store</h5>
                </div>
                <div className='imagetag1'>
                    <img className='image1' src="/images/screen1.png" alt="My Image" />
                    <img className='image2' src="/images/screen2.png" alt="My Image" />
                </div>
            </div>
        </div>
    );
}






