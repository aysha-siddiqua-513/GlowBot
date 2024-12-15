import React from 'react';
import { Box, Paper, Typography, Button, Grid, Card, CardMedia, CardContent, Container , CardActions} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpaIcon from '@mui/icons-material/Spa';
import FaceIcon from '@mui/icons-material/Face';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '10px',
  boxShadow: theme.shadows[3],
}));

const TipCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}));

// SkincareTips Component
const SkincareTips = () => (
  <Box sx={{ padding: '20px', backgroundColor: '#fff9f0' ,borderRadius: '12px',}}>
    <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', marginBottom: 4 , color: '#4a4031'}}>
      Get Skin Changing Secrets
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {/* Tip 1 */}
      <Grid item xs={12} sm={6}>
        <TipCard>
          <CardMedia
            component="img"
            image="download1.jpg"
            alt="Ice Roller"
            sx={{ width: 100, height: 100, borderRadius: '50%' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ color: '#4a4031' }}>
              Tip#1 Ice Roller
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Use an ice roller to reduce redness, soothe skin, and shrink pores.
            </Typography>
          </CardContent>
        </TipCard>
      </Grid>

      {/* Tip 2 */}
      <Grid item xs={12} sm={6}>
        <TipCard>
          <CardMedia
            component="img"
            image="download2.jpg"
            alt="Double Cleanse"
            sx={{ width: 100, height: 100, borderRadius: '50%' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ color: '#4a4031' }}>
              Tip#2 Double Cleanse
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Start with an oil cleanser, then use a water-based cleanser for deep cleaning.
            </Typography>
          </CardContent>
        </TipCard>
      </Grid>

      {/* Tip 3 */}
      <Grid item xs={12} sm={6}>
        <TipCard>
          <CardMedia
            component="img"
            image="download3.jpg"
            alt="Hydrating Hack"
            sx={{ width: 100, height: 100, borderRadius: '50%' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ color: '#4a4031' }}>
              Tip#3 Hydrating Hack
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Layer face toner for extra moisture and nourishment.
            </Typography>
          </CardContent>
        </TipCard>
      </Grid>

      {/* Tip 4 */}
      <Grid item xs={12} sm={6}>
        <TipCard>
          <CardMedia
            component="img"
            image="download4.jpg"
            alt="Spot Treatment"
            sx={{ width: 100, height: 100, borderRadius: '50%' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ color: '#4a4031' }}>
              Tip#4 Spot Treatment
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Dab on tea tree oil or benzoyl peroxide before bed to target blemishes.
            </Typography>
          </CardContent>
        </TipCard>
      </Grid>
    </Grid>
  </Box>
);

// Main Skincare Component
const Skincare = () => {
  return (
    <Box sx={{ backgroundColor: '	 #dfd0c7' }}>
      {/* Header Component */}
      <Header />

      <Box
        sx={{
          backgroundColor: '#f8f6f1', // light beige
          padding: '60px 20px',
          marginBottom: '20px',
          fontSize: '40px',
          fontWeight: 'bold',
          color: '#4a4031', // soft brown
          backgroundImage: 'url("/home4.1.gif")', // GIF as background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh', // Minimum height to fill the viewport
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', // Align items to the left
          textAlign: 'left',
          px: 3, // Padding left and right
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0)', // semi-translucent white backdrop
              borderRadius: '8px',
              padding: '20px',
              backdropFilter: 'blur(5px)', // optional: adds a blur effect to the backdrop
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Clean. Moisture. Care.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'white' }}>
              GlowBot offers the best skincare solutions to maintain your skin's health and glow.
            </Typography>
            <Button variant="contained" sx={{ mr: 2, backgroundColor: '#4a4031' }} component={RouterLink} to="/shop">
              Shop Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Personalized Quiz Section */}
      <Container disableGutters sx={{ backgroundColor: ' #dfd0c7', py: 3 }}>
        <Box sx={{
          backgroundColor: '#fff9f0',
          py: 6,
          px: 4,
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#4a4031' }}>
            Personalized Skincare Quiz
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={12}>
              <Item>
                <Typography variant="h4" gutterBottom>
                  Personalized Skincare Quiz
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Take our quiz to receive tailored skincare recommendations based on your unique needs.
                </Typography>
                <Button variant="contained"  size="large" sx={{ mt: 2, color:'white' ,backgroundColor: '#4a4031'}} component={RouterLink} to="/quiz">
                  Take the Quiz
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container disableGutters sx={{ backgroundColor: '	 #dfd0c7', py: 3 }}>
        <Box sx={{
          backgroundColor: '#fff9f0',
          py: 6,
          px: 4,
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#4a4031' }}>
          Recommendations
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={12}>
              <Item>
                <Typography variant="h4" gutterBottom>
                  Product Recommendations
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Discover the best products for your skin based on your quiz results, including cleansers, moisturizers, and more.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container disableGutters sx={{ backgroundColor: '	 #dfd0c7', py: 3 }}>
      <Box
          sx={{
            backgroundColor: '#fff9f0',
            py: 6,
            px: 4,
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#4a4031' }}>
            Enhance Your Skincare Routine
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <FaceIcon fontSize="large" color="secondary" sx={{ mb: 2, color: '#7d4f40' }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#4a4031' }}>
                  Daily Skincare Routine
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ color: '#6d6d6d' }}>
                  Learn how to start and end your day with the right skincare steps.
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <SpaIcon fontSize="large" color="secondary" sx={{ mb: 2, color: '#7d4f40' }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#4a4031' }}>
                  Skincare Tips
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ color: '#6d6d6d' }}>
                  Get expert advice for glowing and healthy skin.
                </Typography>
              </Item>
            </Grid>
                
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <FavoriteIcon fontSize="large" color="secondary" sx={{ mb: 2, color: '#7d4f40' }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#4a4031' }}>
                  Seasonal Skin Care
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ color: '#6d6d6d' }}>
                  Adjust your routine for different seasons and climates.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

          {/* Skincare Tips Section */}
      <Container disableGutters sx={{ backgroundColor: '	 #dfd0c7', py: 3 }}>
        <SkincareTips />
      </Container>

      
      <Container disableGutters sx={{ backgroundColor: '	 #dfd0c7' ,py: 3}}>
       <Box sx={{
          backgroundColor: '#fff9f0',
          py: 6,
          px: 4,
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#4a4031' }}>
      Skincare Routines
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140?text=Morning+Routine"
                alt="Morning Routine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Morning Routine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Start your day with cleanser, toner, moisturizer, and sunscreen for a fresh, glowing look.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140?text=Night+Routine"
                alt="Night Routine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Night Routine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Repair and hydrate your skin overnight with our recommended routine for radiant skin.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140?text=Weekly+Treatment"
                alt="Weekly Treatment"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weekly Treatments
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Indulge in exfoliation and masks weekly to reveal bright, smooth skin.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid> </Box>
        </Container>
      {/* Footer Component */}
      <Footer />
    </Box>
  );
};

export default Skincare;