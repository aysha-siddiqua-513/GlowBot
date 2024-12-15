import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import PersonIcon from "@mui/icons-material/Person";
import { Face, ShoppingCart, ThumbUp, ChatBubble, VideoLibrary, Assignment } from '@mui/icons-material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "10px",
  boxShadow: theme.shadows[3],
}));
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6d9d0", // light beige
  padding: "60px 0", // Remove side padding for full width
  fontSize: "40px",
  fontWeight: "bold",
  color: "#4a4031", // soft brown
  backgroundImage: 'url("/home.jpg")', // Background image
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "80vh", // Minimum height to fill the viewport
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start", // Align items to the left
  textAlign: "left",
  px: 3,
}));

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />

      <SectionContainer>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0)", // semi-translucent white backdrop
            borderRadius: "8px",
            padding: "20px",
            backdropFilter: "blur(5px)", // optional: adds a blur effect to the backdrop
          }}
        >
          <Typography variant="h4" color="#4a4031" gutterBottom>
            <b>Skincare Solutions</b>
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Discover routines, tips, and products
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            tailored to your unique skin needs.
          </Typography>
          <Button
            variant="contained"
            sx={{ mr: 2, backgroundColor: "#4a4031" }}
            component={RouterLink}
            to="/"
          >
            Get Started
          </Button>
        </Box>
      </SectionContainer>
      <Container
  disableGutters
  maxWidth="100%"
  sx={{ backgroundColor: "#dfd0c7", py: 6 }}
>
  <Box
    sx={{
      backgroundColor: "#fff9f0",
      py: 6,
      px: 4,
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      color="primary"
      gutterBottom
      sx={{
        mb: 4,
        fontWeight: "bold",
        color: "#4a4031",
        fontFamily: "'Roboto', sans-serif", // Updated font family
        fontSize: "32px",
      }}
    >
      Our Mission & Vision
    </Typography>

    {/* Mission and Vision Section */}
    <Grid container spacing={6} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Item
          sx={{
            p: 3,
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fdf5e6",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#4a4031" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            To provide innovative skincare solutions, making healthy and glowing skin accessible to everyone.
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Item
          sx={{
            p: 3,
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fdf5e6",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#4a4031" }}>
            Our Vision
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            To empower individuals to achieve their best skin through personalized care, education, and high-quality products.
          </Typography>
        </Item>
      </Grid>
    </Grid>
<br/>
    {/* Recommendations Section */}
    <Typography
      variant="h4"
      color="primary"
      gutterBottom
      sx={{
        mb: 4,
        fontWeight: "bold",
        color: "#4a4031",
        fontFamily: "'Roboto', sans-serif", // Updated font family
        fontSize: "32px",
      }}
    >
      Personalized Recommendations
    </Typography>

    <Grid container spacing={6} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Item
          sx={{
            p: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fdf5e6",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#4a4031" }}>
            Skin Care Regimen
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Based on your skin type, we recommend a daily regimen of cleansers, toners, and moisturizers.
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Item
          sx={{
            p: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fdf5e6",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#4a4031" }}>
            Anti-Aging Treatment
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            For mature skin, we recommend age-defying products packed with antioxidants and vitamins.
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Item
          sx={{
            p: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fdf5e6",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#4a4031" }}>
            Hydration Boost
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Deep hydration is essential. We suggest moisturizers that lock in moisture and keep your skin plump.
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Item
          sx={{
            p: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fdf5e6",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#4a4031" }}>
            Brightening Solutions
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Achieve an even complexion with our products designed to brighten and reduce dark spots.
          </Typography>
        </Item>
      </Grid>
    </Grid>
  </Box>
</Container>

      <Container
  disableGutters
  maxWidth="100%"
  sx={{ backgroundColor: "#dfd0c7", py: 3 }}
>
  <Box
    sx={{
      backgroundColor: "#fff9f0",
      py: 6,
      px: 4,
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      color="primary"
      gutterBottom
      sx={{ mb: 4, fontWeight: "bold", color: "#4a4031" }}
    >
      About Us
    </Typography>

    <Typography
  variant="body1"
  color="textSecondary"
  sx={{
    mb: 4,
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif", // Updated font family
    color: "#4a4031", // Darker text for a more elegant look
    lineHeight: 1.8,
  }}
>
  Discover your perfect skincare routine with us! We believe in providing personalized solutions for every skin type. Our platform offers everything you need, from expert advice to curated products, all designed to bring out your natural glow. Join us in making skincare an effortless part of your lifestyle!
</Typography>


    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#fff",
            py: 4,
            px: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Face fontSize="large" color="secondary" sx={{ mb: 2, color: "#4a4031" }} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#4a4031" }}>
            Skincare Page
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Access detailed skincare routines and tips for every skin type to help you achieve a radiant complexion.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#fff",
            py: 4,
            px: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ShoppingCart fontSize="large" color="secondary" sx={{ mb: 2, color: "#4a4031" }} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#4a4031" }}>
            E-commerce
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Shop for a variety of curated skincare products to suit all your skin’s needs and preferences.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#fff",
            py: 4,
            px: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ThumbUp fontSize="large" color="secondary" sx={{ mb: 2, color: "#4a4031" }} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#4a4031" }}>
            Recommendation Page
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Receive personalized skincare recommendations based on your unique skin type and goals.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#fff",
            py: 4,
            px: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ChatBubble fontSize="large" color="secondary" sx={{ mb: 2, color: "#4a4031" }} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#4a4031" }}>
            Chatbot
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Our intelligent chatbot is here to answer your questions and offer support anytime.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#fff",
            py: 4,
            px: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <VideoLibrary fontSize="large" color="secondary" sx={{ mb: 2, color: "#4a4031" }} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#4a4031" , textAlign:"center"}}>
            Video Tutorials
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Watch step-by-step tutorials to learn and enhance your skincare routine effectively.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#fff",
            py: 4,
            px: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Assignment fontSize="large" color="secondary" sx={{ mb: 2, color: "#4a4031" }} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#4a4031" }}>
            Tracker App
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: "#6d6d6d" }}>
            Keep track of your skincare progress with our interactive tracker tool, designed for your convenience.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
</Container>

      <Box sx={{ backgroundColor: "#e6d9d0", py: 3 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
            Video Tutorials
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                }}
              >
                <video
                  src="vdo-1.mp4" // Points to the file in the public folder
                  width="100%"
                  controls // Allows the user to play, pause, etc.
                  style={{ marginBottom: "10px" }}
                />
                <Typography variant="body2">Moisturizing Soap</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                }}
              >
                <video
                  src="vdo-2.mp4" // Replace with the correct file name
                  width="100%"
                  controls
                  style={{ marginBottom: "10px" }}
                />
                <Typography variant="body2">Natural Cleanser</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                }}
              >
                <video
                  src="vdo-3.mp4" // Replace with the correct file name
                  width="100%"
                  controls
                  style={{ marginBottom: "10px" }}
                />
                <Typography variant="body2">Herbal Face Wash</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#f5f0e6", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Georgia, serif",
            }}
          >
            User Testimonials
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                review: "GlowBot transformed my skincare routine!",
                rating: 5,
                user: "Happy Customer",
              },
              {
                review: "My skin has never felt better!",
                rating: 4,
                user: "Satisfied User",
              },
              {
                review: "Amazing results after just one week!",
                rating: 5,
                user: "Loyal Fan",
              },
              {
                review: "Perfect for sensitive skin like mine.",
                rating: 4,
                user: "Delighted Client",
              },
              {
                review: "I love the natural glow it gives me!",
                rating: 5,
                user: "Beauty Enthusiast",
              },
              {
                review: "Very easy to incorporate into my routine.",
                rating: 4,
                user: "First-time User",
              },
              {
                review: "Helped clear up my skin effectively!",
                rating: 5,
                user: "Grateful Customer",
              },
              {
                review: "Smells amazing and feels great on my skin.",
                rating: 4,
                user: "Happy User",
              },
              {
                review: "A must-have for anyone into skincare!",
                rating: 5,
                user: "Skincare Lover",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#d9bca4", // Beige-toned color to match the palette
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      marginRight: "16px",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <PersonIcon sx={{ fontSize: "32px" }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        fontFamily: "Georgia, serif",
                        color: "#333",
                      }}
                    >
                      "{testimonial.review}"
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mt: 1,
                        color: "#777",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      - {testimonial.user}
                    </Typography>
                    <Box sx={{ display: "flex", mt: 1 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span
                          key={i}
                          style={{ color: "#FFD700", marginRight: "3px" }}
                        >
                          ★
                        </span>
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <span
                          key={i}
                          style={{ color: "#e0e0e0", marginRight: "3px" }}
                        >
                          ★
                        </span>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#f0e6d9", py: 6 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Georgia, serif",
              color: "#3d3d3d",
            }}
          >
            Skincare Tips & Tricks
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                tip: "Always remove makeup before bed. It prevents clogged pores and breakouts.",
              },
              {
                tip: "Stay hydrated. Drinking water keeps your skin glowing and reduces dryness.",
              },
              {
                tip: "Apply sunscreen daily, even on cloudy days, to protect against UV damage.",
              },
              {
                tip: "Moisturize daily to maintain your skin's natural barrier and keep it soft.",
              },
              {
                tip: "Use a gentle exfoliator 1-2 times a week to remove dead skin cells.",
              },
              {
                tip: "Include antioxidant-rich foods in your diet for radiant, youthful skin.",
              },
            ].map((tipItem, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#ffffff",
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        color: "#333",
                        fontFamily: "Georgia, serif",
                        fontSize: "18px",
                      }}
                    >
                      {tipItem.tip}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Chatbot />
      <Footer />
    </Box>
  );
};

export default HomePage;
