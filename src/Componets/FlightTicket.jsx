import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Grid, Button, Divider, Avatar } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase/Firebase'; // Adjust the path as necessary
import HeaderImage from './HeaderImage';

const FlightTicket = () => {
  const [booking, setBooking] = useState(null);
  const isActive = (path) => location.pathname === path;
  useEffect(() => {
    const fetchBookingData = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        const bookingRef = doc(db, 'users', currentUser.uid); // Ensure you're accessing the correct document
        const bookingSnapshot = await getDoc(bookingRef);

        if (bookingSnapshot.exists()) {
          setBooking(bookingSnapshot.data());
        } else {
          console.log('No booking data found for this user.');
        }
      }
    };

    fetchBookingData();
  }, []);

  if (!booking) {
    return <Typography>{<CircularProgress /> }</Typography>; // Optional loading state
  }

  // Destructure booking data
  const {
    email = 'Unknown Email',
    name = 'Unknown Name',
    bookingDetails = {} // Ensure this is defined
  } = booking;

  // Destructure from bookingDetails
  const {
    date = 'N/A',
    destination = 'N/A',
    category = 'N/A',
    persons = 'N/A',
    specialRequest = 'N/A',
    image = '' // Assuming you want to show this as well
  } = bookingDetails;

//   console.log(bookingDetails.name);

  return (
    <>
    {isActive("/") ? "" : <HeaderImage />}
    <Card 
      sx={{
        // fontFamily: 'Roboto, sans-serif',
        // bgcolor: 'background.paper', 
        maxWidth: '100%', 
        borderRadius: '16px', 
        boxShadow: 3, 
        overflow: 'hidden',
        border: '1px solid #ddd',
        color: '#333',
      }}
    >
      <CardContent 
        sx={{ 
          padding: { xs: '16px', sm: '24px', md: '32px' }, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between'
        }}
      >
        {/* Left Section */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '65%' }, 
            borderRight: { xs: 'none', md: '1px solid #eee' }, 
            paddingRight: { xs: 0, md: '24px' } 
          }}
        >
          {/* User Information */}
          <Typography  variant="h6" fontWeight="bold" fontSize="18px" fontFamily="fantasy">{bookingDetails.name}</Typography>
          <Typography variant="body2" color="text.secondary">{email}</Typography>

          <Divider sx={{ my: 2 }} />

          {/* Flight Information */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Date</Typography>
              <Typography fontWeight="bold" fontSize="18px" fontFamily="fantasy" variant="h6">{date}</Typography>
            </Grid> 
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Destination</Typography>
              <Typography fontWeight="bold" fontSize="18px" fontFamily="fantasy" variant="h6">{destination}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Category</Typography>
              <Typography fontWeight="bold" fontSize="18px" fontFamily="fantasy" variant="h6">{category}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Persons</Typography>
              <Typography fontWeight="bold" fontSize="18px" fontFamily="fantasy" variant="h6">{persons}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">Special Request</Typography>
              <Typography fontWeight="bold" fontSize="18px" fontFamily="fantasy" variant="h6">{specialRequest}</Typography>
            </Grid>
          </Grid>

          {/* Displaying the image if available */}
          
        </Box>

        {/* Right Section - Pricing (if you have pricing info) */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '35%' }, 
            mt: { xs: '16px', md: 0 }, 
            textAlign: 'center',
            paddingLeft: { xs: 0, md: '24px' }
          }}
        >
          {/* Price (if you have price info in booking) */}
          {/* Adjust this part according to where the price data is located */}
          {/* <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
            {formattedPrice}
          </Typography> */}
          
          {/* Book Button */}
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            Book Now
          </Button>

          <Divider sx={{ mb: 2 }} />
        </Box>
      </CardContent>
    </Card>
    </>
  );
};

export default FlightTicket;
