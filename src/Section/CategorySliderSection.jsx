import React, { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import p1 from "../assets/Categories/p-1.png";
import p2 from "../assets/Categories/p-3.png";
import p3 from "../assets/Categories/p-6.png";
import p4 from "../assets/Categories/p-7.png";
import p5 from "../assets/Categories/p-9.png";
import p6 from "../assets/Categories/p-13.png";
import p7 from "../assets/Categories/p-14.png";
import p8 from "../assets/Categories/p-19.png";
const categories = [
  { name: "Muffin", img: p1, link: "/category/muffin" },
  { name: "Meat", img: p2, link: "/category/meat" },
  { name: "Paneer", img: p3, link: "/category/paneer" },
  { name: "Hotdog", img: p4, link: "/category/hotdog" },
  { name: "Donuts", img: p5, link: "/category/donuts" },
  { name: "Coffee", img: p6, link: "/category/coffee" },
  { name: "Sandwich", img: p7, link: "/category/sandwich" },
  { name: "Noodles", img: p8, link: "/category/noodles" },
   { name: "Noodles", img: p8, link: "/category/noodles" },
];
const CategorySlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 991, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Box component="section">
      <Box className="scrn-container">
        <Box sx={{ py: 6, position: "relative", overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "32px" },
                  color: "#000",
                }}
              >
                Categories
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666", mt: 0.5, fontSize: "16px" }}
              >
                Browse out top categories here to discover different food
                cuisine.
              </Typography>
            </Box>


            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                onClick={() => sliderRef.current.slickPrev()}
               
              >
                <ArrowBackIosNewIcon 
                
                 sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50px",
                  backgroundColor: "#1800a1",
                  padding: "10px",
                  fontSize: "20px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0b36e8" },
                }}/>
              </IconButton>

              <IconButton
                onClick={() => sliderRef.current.slickNext()}
                
              >
                <ArrowForwardIosIcon  
                 sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50px",
                  backgroundColor: "#1800a1",
                  padding: "10px",
                  fontSize: "20px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0b36e8" },
                }}
                />
              </IconButton>
            </Box>
          </Box>

 
          <Box
          sx={{
            paddingTop:'20px'
          }}
          >
            <Slider ref={sliderRef} {...settings}>
            {categories.map((cat, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Link
                  to={cat.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      textAlign: "center",
                      padding: "calc(10px + 10 * (100vw - 320px) / 1600) calc(8px + 7 * (100vw - 320px) / 1600)",
                      backgroundColor: "#f9f9f9",
                      transition: "all 0.3s ease",
                      border: "1px solid #00000027",
                      "&:hover": {
                        transform: "translateY(-5px) scale(1.1)",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                        border: "1px solid #3e3ef24d",
                        backgroundColor: "#3a81ec18",
                        transition: "0.4s ease"
                      },
                    }}
                  >

                  {/* <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      textAlign: "center",
                      padding:"calc(10px + 10 * (100vw - 320px) / 1600) calc(8px + 7 * (100vw - 320px) / 1600)",
                      backgroundColor: "##f9f9f9",
                      transition: "all 0.3s ease",
                      border:"1px solid #00000027",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                        border:"1px solid #3e3ef24d",
                            transform: "scale(1.1)", 
                            backgroundColor:"#3a81ec18",
                            transition:"0.4s ease"
                      },
                    }}
                  > */}
                    <CardMedia
                      component="img"
                      src={cat.img}
                      alt={cat.name}
                      sx={{
                        width: 60,
                        height: 60,
                        mx: "auto",
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />
                    <CardContent sx={ {
                        padding:" 0 !important"
                    }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: "18px",
                          color: "#333",
                        }}
                      >
                        {cat.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            ))}
          </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategorySlider;
