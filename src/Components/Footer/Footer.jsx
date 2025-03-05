import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "@fontsource/poppins";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold",
          mt:4,
          mb: 1,
          letterSpacing: "1px",
        }}
      >
        Stay Updated
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          mt:4,
          mb: 3,
          opacity: 0.8,
          fontSize: "16px",
        }}
      >
        Subscribe to get the latest news and updates.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "50px",
          padding: "5px",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter your email"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: {
              color: "white",
              paddingLeft: "20px",
              fontFamily: "'Poppins', sans-serif",
            },
          }}
          sx={{
            backgroundColor: "transparent",
            flex: 1,
          }}
        />
        <Button
          variant="contained"
          sx={{
            
            backgroundColor: "white",
            color: "#111",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            borderRadius: "50px",
            px: 3,
            ml: 1,
            height: "45px",
            "&:hover": {
              backgroundColor: "#ddd",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          mt: "14rem",
          opacity: 0.6,
          fontSize: "14px",
        }}
      >
        Copyright © 2025 Traffic Ology - All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;