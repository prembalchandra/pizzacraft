import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import BackgroundEffect from "../Section/BackgroundEffect";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeroBannerImg from "../assets/Banner/herobannerImg.jpg";
import scooterImg from '../assets/iocnimg/scooter.png';
const FeatureCard = ({ icon: Icon, title }) => (
  <Paper
    elevation={3}
    sx={{
      background:
        "linear-gradient(180deg, rgba(226, 232, 255, 0) 0%, rgba(226, 232, 255, 0.06) 100%), rgba(226, 232, 255, 0.02)",
      color: "#fff",
      borderRadius: "19px",
      padding: "calc(10px + 10 * (100vw - 320px) / 1600)",
      textAlign: "center",
      width: "calc(227px + 20 * (100vw - 320px) / 1600)",
      display: { xs: "none", sm: "flex" },
      flexDirection: "row",
      alignItems: "center",
      gap: 1.5,
      transition: "0.3s",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "1px solid rgba(226, 232, 255, 0.1)",
      "&:hover": { bgcolor: "rgba(58,47,40,0.95)" },
      minWidth: 140,

      
    }}
  >
    <Icon sx={{ fontSize: 60, color: "#ffc107" }} />
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 400,
        width: "calc(100% - 50px)",
        textAlign: "left",
      }}
    >
      {title}
    </Typography>
  </Paper>
);


const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "80vh",
        "@media (min-width:991px)": {
          height: "100%",
        },
        color: "#fff",
        backgroundImage: `url(${HeroBannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 1,
        padding:
          "calc(120px + 34 * (100vw - 320px) / 1600) 0 calc(80px + 20 * (100vw - 320px) / 1600) !important",
      }}
    >
      <BackgroundEffect />

      <Box sx={{ width: "100%", maxWidth: 1200, px: 3, textAlign: "center" }}>
 
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "40px", md: "50px" },
            background: "linear-gradient(to right, #ffc107, #547af0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Discover Amazing Art
        </Typography>


        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Discover restaurants that deliver near you
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "none",
            gap: 2,
            mb: 5,
             "@media (max-width:991px)": {
                gap:"10px"
        },
          }}
        >
          <TextField
            placeholder="Search for Restaurant"
            variant="outlined"
            fullWidth
            sx={{
              maxWidth: 500,
              "& .MuiOutlinedInput-root": {
                borderRadius: 100,
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                "& input": {
                  padding: "12px 20px",
                  color: "#fff",
                },
                "&.Mui-focused fieldset": { borderColor: "transparent" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#ffc107" }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 100,
              background: "linear-gradient(to right, #fff, #ffc107)",
              color: "#000",
              fontWeight: 500,
              "&:hover": {
                    background: "linear-gradient(to right, #fff, #ffc107)",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Grid container spacing={3} justifyContent="center" sx={{ gap: 2 }}>
          <Grid
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "row",
            }}
          >
            <FeatureCard icon={MapIcon} title="Wide Map" />
            <FeatureCard icon={ShoppingCartIcon} title="Easiest Order" />
            <FeatureCard icon={LocalShippingIcon} title="Most Delivery" />
          </Grid>
        </Grid>
      </Box>
       <Box
        component="img"
        src={scooterImg}
        alt="Delivery Scooter"
        sx={{
          position: 'absolute',
          bottom: 0,
          
          left: '-250px', 
          width: '9%',
          animation: 'moveScooter 20s linear infinite', 
        }}
      />

      <style>
        {`
          @keyframes moveScooter {
            0% {
              left: -250px;
            }
            100% {
              left: 100%;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
