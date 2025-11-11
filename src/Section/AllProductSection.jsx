import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

import img1 from "../assets/vp-9.png";
import img2 from "../assets/vp-9.png";
import img3 from "../assets/24.webp";

const products = [
  {
    id: 1,
    name: "Cozy Cuppa Cafe",
    title: "Rosso Desiderio",
    newPrice: "₹338,500",
    rating: 3.6,
    oldPrice: "₹400,000",
    images: [img1, img2, img3],
  },
  {
    id: 2,
    name: "Cozy Cuppa Cafe",
    title: "Morning Flow",
    newPrice: "₹210,000",
    rating: 3.6,
    oldPrice: "₹260,000",
    images: [img1, img2, img3],
  },
  {
    id: 3,
    name: "Cozy Cuppa Cafe",
    title: "Vivid Shapes",
    newPrice: "₹150,000",
    rating: 3.6,
    oldPrice: "₹180,000",
    images: [img1, img2, img3],
  },
  {
    id: 4,
    name: "Cozy Cuppa Cafe",
    title: "Cheesecake, Waffles, Cakes,...",
    newPrice: "₹275,000",
    rating: 3.6,
    oldPrice: "₹330,000",
    images: [img1, img2, img3],
  },
  {
    id: 5,
    name: "Cozy Cuppa Cafe",
    title: "Cheesecake, Waffles, Cakes,...",
    newPrice: "₹275,000",
    oldPrice: "₹330,000",
    rating: 3.6,
    images: [img1, img2, img3],
  },
  {
    id: 6,
    name: "Cozy Cuppa Cafe",
    title: "Cheesecake, Waffles, Cakes,...",
    newPrice: "₹275,000",
    oldPrice: "₹330,000",
    rating: 3.6,
    images: [img1, img2, img3],
  },
];

const ProductSection = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, backgroundColor: "#e5e5e5" }}>
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 5 },
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#0b36e8",
                mb: 1,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              Top Rated Items With Excellent Reviews From Happy Customers
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                maxWidth: 600,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Browse our curated collection of original artworks, featuring a
              wide variety of styles and mediums in one place.
            </Typography>
          </Box>

          {/* Navigation Arrows */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <IconButton onClick={() => sliderRef.current.slickPrev()}>
              <ArrowBackIosNewIcon
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  backgroundColor: "#1800a1",
                  padding: "10px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0b36e8" },
                }}
              />
            </IconButton>
            <IconButton onClick={() => sliderRef.current.slickNext()}>
              <ArrowForwardIosIcon
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  backgroundColor: "#1800a1",
                  padding: "10px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0b36e8" },
                }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* Product Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((product) => (
            <Box key={product.id} sx={{ px: 1 }}>
              <Card
                component={Link}
                to="/bridget"
                sx={{
                  textDecoration: "none",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    mb: 2,
                    overflow: "hidden",
                    p: 1.5,
                    backgroundColor: "#fff",
                    border: "1px solid #e8e8e8",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  {/* Inner Image Slider */}
                  <Slider
                    dots={false}
                    infinite
                    speed={300}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows
                    autoplay
                  >
                    {product.images.map((img, index) => (
                      <Box
                        key={index}
                        sx={{
                          borderRadius: 1,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={img}
                          alt={`${product.title} ${index + 1}`}
                          sx={{
                            width: "100%",
                            aspectRatio: "4/3",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                            "&:hover": { transform: "scale(1.1)" },
                          }}
                        />
                        <FavoriteBorderIcon
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "rgba(255,255,255,0.8)",
                            borderRadius: "50%",
                            p: 0.5,
                            fontSize: 22,
                            "&:hover": {
                              backgroundColor: "#fff",
                              color: "#1800a1",
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>

                  <CardContent sx={{ px: 2, pb: 2, pt: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: { xs: "0.95rem", sm: "1rem" },
                          lineHeight: "normal",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.3}>
                        <StarIcon sx={{ color: "#2ECC71", fontSize: 18 }} />
                        <Typography variant="body2" fontWeight={600}>
                          {product.rating}
                        </Typography>
                      </Stack>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mt: 0.5,
                        borderBottom: "1px dashed #e8e8e8",
                        pb: 0.5,
                      }}
                    >
                      {product.title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        flexWrap: "wrap",
                        mt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#000",
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                        }}
                      >
                        {product.newPrice}
                      </Typography>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "#f76161",
                          fontSize: "14px",
                        }}
                      >
                        {product.oldPrice}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductSection;
