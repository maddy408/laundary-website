import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../assets/logo1.png';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';

const drawerWidth = 240;
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/service' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

function NavbarPage(props) {
  const navigate = useNavigate(); 

  const handleClick = (path) => {
    navigate(path);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item.path)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* Header Section */}
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '10px 20px',
    width: '100%',
    gap: 2,
    flexDirection: { xs: 'column', sm: 'row', md: 'row' }, 
  }}
>

        {/* Logo */}
        <Box
  component="img"
  src={img}
  sx={{
    width: 100,
    height: 100,
    borderRadius: '8px',
    mx: { xs: 'auto', sm: 0, md: 0 }, 
  }}
/>


        {/* Contact Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2,ml:{xs:-4} }}>
          <PhoneIcon sx={{ color: 'orange', fontSize: 50 }} />
          <Typography sx={{ fontSize: 'medium', color: 'black' }}>
            Phone Number <br />
            (650) 121-2132
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <EmailIcon style={{ color: 'orange', fontSize: 50 }} sx={{ color: 'orange', fontSize: 50 }} />
          <Typography sx={{ fontSize: 'medium', color: 'black' }}>
            Email Us Here <br />
            example@gmail.com
          </Typography>
        </Box>

        <Button
  sx={{
    borderRadius: 50,
    backgroundColor: '#003366',
    fontSize: { xs: '12px', sm: '14px' }, 
    padding: '8px 20px',
    mt: { xs: 1, sm: 0, md: 0 },         
  }}
  
  variant="contained"
>
  <Typography sx={{  fontSize: { xs: '13px', sm: '16px', md: '18px' }, display: { xs: 'block', sm: 'none' } }}>
    Mon – Sat: 09.00 AM to 09.00 PM
  </Typography>
  <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
    Mon – Sat: 09.00 AM to 09.00 PM
  </Typography>
</Button>

      </Box>

      {/* Navbar */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" position="static" sx={{ backgroundColor: '#003366' }}>
          <Toolbar>
            <IconButton 
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Navigation Items with Contained Button */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 2,
                ml: 2,
              }}
            >
              {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#fff' }} onClick={() => handleClick(item.path)}>
                  {item.name}
                </Button>
              ))}

              {/* Contained Button Inside Navbar */}
             

            </Box>
          </Toolbar>
        </AppBar>

        {/* Sidebar for Mobile */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

NavbarPage.propTypes = {
  window: PropTypes.func,
};

export default NavbarPage;
