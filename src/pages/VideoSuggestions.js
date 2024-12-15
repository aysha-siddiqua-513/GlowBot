import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const VideoSuggestions = ({ skinType }) => {
  const videoLinks = {
    Oily: [
      "https://www.youtube.com/watch?v=hevaszImfJk",
      "https://www.youtube.com/watch?v=f1DowLpeqRk",
      "https://www.youtube.com/watch?v=yvSSk25Ws_k",
      "https://www.youtube.com/watch?v=4PdXgR9DMb8"
    ],
    Dry: [
      "https://www.youtube.com/watch?v=lUw2SKu3Q-k",
      "https://www.youtube.com/watch?v=JRIKEn_i2tU",
      "https://www.youtube.com/watch?v=2tJUVQLiStA",
      "https://www.youtube.com/watch?v=SJ1k2qQ7uO4",
    ],
    Combination: [
      "https://www.youtube.com/watch?v=video_combination_1",
      "https://www.youtube.com/watch?v=video_combination_2",
      "https://www.youtube.com/watch?v=video_combination_3"
    ],
    Sensitive: [
      "https://www.youtube.com/watch?v=video_sensitive_1",
      "https://www.youtube.com/watch?v=video_sensitive_2",
      "https://www.youtube.com/watch?v=video_sensitive_3"
    ],
  };

  // Based on selected skin type, return the relevant video links
  const getVideoLinks = () => {
    return videoLinks[skinType] || [];
  };

  return (
    <Box
      sx={{
        mt: 4,
        backgroundColor: "white", // Creamy Beige Background
        py: 6,
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#4a4031", // Dark beige color for text
            textAlign: "center",
          }}
        >
          Suggested Video Links for {skinType} Skin
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {getVideoLinks().map((link, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                mb: 2,
                backgroundColor: "#f0e6d2", // Light cream for button background
                color: "#4a4031", // Dark text color for button
                fontWeight: "bold",
                borderColor: "#f0e6d2", // Matching border color
                '&:hover': {
                  backgroundColor: "#e0d3b6", // Slightly darker beige on hover
                  borderColor: "#d8c29d", // Hover border color
                },
                padding: "12px 24px",
                textTransform: "none", // To keep text normal
              }}
              onClick={() => window.open(link, "_blank")}
            >
              Watch Video {index + 1}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSuggestions;
