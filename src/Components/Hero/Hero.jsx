import React from "react";
import { Box, Typography } from "@mui/material";
import trafficImage from "../../assets/Image/trafficology.jpg"; 

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "80vh",
        backgroundImage: `url(${trafficImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        fontFamily: "'Source Sans Pro', Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
        }}
      />

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          letterSpacing: 2,
          textTransform: "uppercase",
          zIndex: 2,
        }}
      >
        TRAFFICOLOGY
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          zIndex: 2,
        }}
      >
        Mastering Traffic Solutions
      </Typography>
    </Box>
  );
};

export default HeroSection;
