import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Tutorials = () => {
  const [likes, setLikes] = useState(Array(40).fill(0)); // To track likes for 40 videos

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const videos = {
    dry: [
      { src: "dry1.mp4", description: "Hydrating Face Mask - Helps soothe and moisturize dry skin." },
      { src: "dry2.mp4", description: "Moisturizing Routine - A simple guide to keeping skin soft and hydrated." },
      { src: "dry3.mp4", description: "Repairing Cream - Restore moisture and hydration to your skin." },
      { src: "dry4.mp4", description: "Winter Care Tips - Protect your skin during cold weather." },
      { src: "dry5.mp4", description: "Overnight Hydration - Moisturizing mask for intense hydration." },
      { src: "dry6.mp4", description: "Facial Massage - Relieve dryness and improve skin texture." },
      { src: "dry7.mp4", description: "Gentle Cleansing - Best products to avoid stripping your skin's moisture." },
      { src: "dry8.mp4", description: "Hydration Mist - Refresh your skin throughout the day." }
    ],
    oily: [
      { src: "oily1.mp4", description: "Deep Cleansing Routine - Helps reduce excess oil and unclog pores." },
      { src: "oily2.mp4", description: "Matte Finish Tips - Keep your skin shine-free throughout the day." },
      { src: "oily3.mp4", description: "Oil-Free Moisturizer - Hydration without clogging pores." },
      { src: "oily4.mp4", description: "Pore Control Routine - Tips for minimizing large pores." },
      { src: "oily5.mp4", description: "Exfoliation Guide - Remove excess oil and dead skin cells." },
      { src: "oily6.mp4", description: "Clay Mask - Detoxifying mask to absorb excess oil." },
      { src: "oily7.mp4", description: "Daytime Skincare - Control shine throughout the day." },
      { src: "oily8.mp4", description: "SPF Protection - Why sunscreen is important for oily skin." }
    ],
    sensitive: [
      { src: "sensitive-skin-1.mp4", description: "Soothing Mask - Calms irritation and reduces redness." },
      { src: "sensitive-skin-2.mp4", description: "Gentle Cleansing - Removes impurities without irritating the skin." },
      { src: "sensitive-skin-3.mp4", description: "Fragrance-Free Routine - Tips for sensitive skin care." },
      { src: "sensitive-skin-4.mp4", description: "Sensitive Skin Routine - A gentle and effective skincare regimen." },
      { src: "sensitive-skin-5.mp4", description: "Hydration for Sensitive Skin - Best products to restore moisture." },
      { src: "sensitive-skin-6.mp4", description: "Calming Facial Oils - Protect and soothe delicate skin." },
      { src: "sensitive-skin-7.mp4", description: "Redness Reduction - Tips to calm skin and reduce redness." },
      { src: "sensitive-skin-8.mp4", description: "Alleviating Irritation - Techniques to reduce skin inflammation." }
    ],
    combination: [
      { src: "combo-skin-1.mp4", description: "Balancing Routine - Maintains hydration without making skin oily." },
      { src: "combo-skin-2.mp4", description: "Dual Masking - Targeted treatments for different areas of the face." },
      { src: "combo-skin-3.mp4", description: "Combination Care - How to manage both dry and oily areas." },
      { src: "combo-skin-4.mp4", description: "Oil Control for T-Zone - Tips for balancing oily areas." },
      { src: "combo-skin-5.mp4", description: "Moisturizing for Dry Patches - Treat dry spots without over-moisturizing." },
      { src: "combo-skin-6.mp4", description: "Exfoliation for Combo Skin - Remove dead skin while balancing moisture." },
      { src: "combo-skin-7.mp4", description: "SPF Tips for Combination Skin - Protect skin while managing oil." },
      { src: "combo-skin-8.mp4", description: "Refreshing Masks - Best masks for combination skin types." }
    ]
  };

  const renderVideos = (skinType, startIndex) => {
    return videos[skinType].map((video, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={startIndex + index}>
        <Box sx={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.05)" }
        }}>
          <video src={video.src} width="100%" controls style={{ borderRadius: "8px", marginBottom: "15px" }} />
          <Typography variant="body2" sx={{ color: "#333", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
            {video.description}
          </Typography>
          <Button variant="contained" sx={{
            mt: 2, backgroundColor: "#d3a87d", color: "white", '&:hover': { backgroundColor: "#c08e6d" }
          }} onClick={() => handleLike(startIndex + index)}>
            Like {likes[startIndex + index]}
          </Button>
        </Box>
      </Grid>
    ));
  };

  return (
    <Box sx={{ backgroundColor: "#f2e9d8", py: 5 }}>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{
          mb: 5, fontWeight: "bold", textAlign: 'center', fontFamily: "'Montserrat', sans-serif", color: "#2c3e50"
        }}>
          Video Tutorials
        </Typography>

        {/* Dry Skin Tutorials */}
        <Typography variant="h5" sx={{
          mb: 4, fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#2c3e50"
        }}>
          Dry Skin
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {renderVideos("dry", 0)}
        </Grid>

        {/* Oily Skin Tutorials */}
        <Typography variant="h5" sx={{
          mt: 5, mb: 4, fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#2c3e50"
        }}>
          Oily Skin
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {renderVideos("oily", 8)}
        </Grid>

        {/* Sensitive Skin Tutorials */}
        <Typography variant="h5" sx={{
          mt: 5, mb: 4, fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#2c3e50"
        }}>
          Sensitive Skin
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {renderVideos("sensitive", 16)}
        </Grid>

        {/* Combination Skin Tutorials */}
        <Typography variant="h5" sx={{
          mt: 5, mb: 4, fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#2c3e50"
        }}>
          Combination Skin
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {renderVideos("combination", 24)}
        </Grid>
      </Container>
      <br/>
      <Footer />
    </Box>
  );
};

export default Tutorials;
