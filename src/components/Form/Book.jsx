import * as React from 'react';
import { Box, TextField, Autocomplete, Stack, Button, Snackbar, Alert } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';
import '../Style/book.css';

const options = ['Wet Wash', 'Dry Cleaning'];

export default function Book() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [deliveryDate, setDeliveryDate] = React.useState(null);
  const [deliveryTime, setDeliveryTime] = React.useState(null);
  const [pickupDate, setPickupDate] = React.useState(null);
  const [pickupTime, setPickupTime] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [errors, setErrors] = React.useState({ name: '', email: '', mobile: '' });
  const [toastOpen, setToastOpen] = React.useState(false);

  const validate = (field, value) => {
    let error = '';
    switch (field) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (!/^[a-zA-Z\s]+$/.test(value)) error = 'Only letters and spaces allowed';
        else if (value.length < 3) error = 'Minimum 3 characters';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      case 'mobile':
        if (!value.trim()) error = 'Mobile number is required';
        else if (!/^\d{10}$/.test(value)) error = 'Must be 10 digits';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMsg = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'mobile') setMobile(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validate('name', name),
      email: validate('email', email),
      mobile: validate('mobile', mobile),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== '');
    if (!hasErrors) {
      setToastOpen(true);
    }
  };

  return (
    <div className="bookdiv">
     
      <h1
        sx={{
          fontSize: {
            xs: '12px',
            sm: '20px',
            md: '28px',
          },
        }}
        style={{ color: '#003366', fontSize: { xs: '6px' } }}
      >
        Schedule Pickup & Delivery
      </h1>

      <h3
        style={{
          color: '#003366',
          textDecoration: 'underline',
          textDecorationColor: 'skyblue',
          textUnderlineOffset: 5,
          textDecorationThickness: 3,
        }}
      >
        Delivery Method
      </h3>

      <form onSubmit={handleSubmit}>
        <Box sx={{ m: 1 }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name || "Please enter your name"}
          />
        </Box>

        <Box sx={{ m: 1 }}>
          <TextField
            fullWidth
            label="Email Id"
            name="email"
            value={email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email || "Please enter your email"}
          />
        </Box>

        <Box sx={{ m: 1 }}>
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={mobile}
            onChange={handleChange}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile || "Enter a 10-digit mobile number"}
          />
        </Box>

        <Box sx={{ m: 1 }}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            options={options}
            renderInput={(params) => <TextField {...params} label="Select Service" />}
          />
        </Box>

        <Box sx={{ m: 1 }}>
          <TextField fullWidth multiline rows={4} label="Address" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, my: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2}>
              <DatePicker label="Delivery Date" value={deliveryDate} onChange={setDeliveryDate} />
              <TimePicker label="Delivery Time" value={deliveryTime} onChange={setDeliveryTime} />
            </Stack>
            <Stack spacing={2}>
              <DatePicker label="Pickup Date" value={pickupDate} onChange={setPickupDate} />
              <TimePicker label="Pickup Time" value={pickupTime} onChange={setPickupTime} />
            </Stack>
          </LocalizationProvider>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, my: 4 }}>
          <Button variant="contained" size="large" type="submit">
            Send
          </Button>
          <Link to="/women">
            <Button variant="outlined" size="large">
              Cancel
            </Button>
          </Link>
        </Box>
      </form>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ mt: -24, width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
