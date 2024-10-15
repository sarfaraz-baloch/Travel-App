import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Button, Divider } from '@mui/material';

const FlightTicket = ({ flight }) => {
   
    
    
  const {
    airline = 'Unknown Airline',
    airlineLogo = '',
    departureTime = '00:00',
    departureAirport = 'Unknown Airport',
    arrivalTime = '00:00',
    arrivalAirport = 'Unknown Airport',
    duration = 'Unknown Duration',
    flightNumber = 'N/A',
    date = 'N/A',
    price = 'N/A'
  } = flight || {};

  // Format the price if available
  const formattedPrice = price !== 'N/A'
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    : 'Price Not Available';

  return (
    <Card 
      sx={{ 
        maxWidth: '100%', 
        borderRadius: '16px', 
        boxShadow: 3, 
        overflow: 'hidden',
        border: '1px solid #ddd'
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
          {/* Airline Name and Logo */}
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            mb={2}
          >
            <Typography variant="h6" fontWeight="bold">
              {airline}
            </Typography>
            {airlineLogo && <img src={airlineLogo} alt={airline} style={{ height: '40px' }} />}
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Flight Information */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Departure</Typography>
              <Typography variant="h6">{departureTime}</Typography>
              <Typography variant="body2" color="text.secondary">{departureAirport}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Arrival</Typography>
              <Typography variant="h6">{arrivalTime}</Typography>
              <Typography variant="body2" color="text.secondary">{arrivalAirport}</Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Typography variant="subtitle2" color="text.secondary">Duration</Typography>
            <Typography variant="h6">{duration}</Typography>
          </Box>

          {/* Flight Number & Date */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Flight Number</Typography>
              <Typography variant="h6">{flightNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">Date</Typography>
              <Typography variant="h6">{date}</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Right Section - Pricing and Barcode */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '35%' }, 
            mt: { xs: '16px', md: 0 }, 
            textAlign: 'center',
            paddingLeft: { xs: 0, md: '24px' }
          }}
        >
          {/* Price */}
          <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
            {formattedPrice}
          </Typography>
          
          {/* Book Button */}
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            Book Now
          </Button>

          <Divider sx={{ mb: 2 }} />

          {/* Barcode Placeholder */}
          <Box 
            sx={{ 
              background: 'linear-gradient(45deg, #333, #fff)', 
              height: '60px', 
              width: '100%', 
              borderRadius: '4px'
            }} 
            aria-label="Barcode"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlightTicket;
