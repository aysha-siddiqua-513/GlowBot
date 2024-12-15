import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';

const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        bgcolor: '#2B9A90',
        color: '#FFF',
        p: 4,
        textAlign: 'center',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?skincare)',
        backgroundSize: 'cover',
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h5">{subtitle}</Typography>
      <Button variant="contained" color="secondary" href={buttonLink} sx={{ mt: 2 }}>
        {buttonText}
      </Button>
    </Box>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default Hero;
