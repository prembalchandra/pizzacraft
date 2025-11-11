import React from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import imgBox1 from "../assets/img-profile.webp";
import imgBox2 from "../assets/img-profile.webp";
import imgBox3 from "../assets/img-profile.webp";

import ArtworkDetails from "./ArtworkDetails";
import Product from "./Product";
import BridgetRileySection from "./BridgetRileySection";
import AllProductSection from "../Section/AllProductSection"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import StarIcon from "@mui/icons-material/Star";
import UserIMg from '../assets/man.webp'

const BridgetSection = () => {
  const images = [imgBox1, imgBox2, imgBox3];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      
      <Box sx={{ flexGrow: 1 , padding:"40px 0" }}>
        <Box  className="scrn-container">
             <Row>
          <Col xs={12} md={8}>
            <Box sx={{ borderRadius: 2, overflow: "hidden", mb: 3 }}>
              <Slider {...sliderSettings}>
                {images.map((src, index) => (
                  <Box key={index}>
                    <img
                      src={src}
                      alt={`Artwork ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>

            {/* Product Section */}
            <Product />

            {/* Artwork Details */}
            <ArtworkDetails />
          </Col>

          {/* Right Section */}
          <Col xs={12} md={4}>
            <Box sx={{ position: "sticky", top: "24px", zIndex: 2 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: "#444", mb: 1 }}>
                  Bridget Riley
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ color: "blue", fontWeight: 600, mb: 1 }}
                >
                  Untitled [Rose] (Schubert 27)
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                  1978 • United Kingdom
                </Typography>

                <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                  68 x 95 cm
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "red",
                    fontWeight: 600,
                  }}
                >
                  ● Sold
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    mt: 3,
                    borderRadius: "30px",
                    textTransform: "none",
                  }}
                >
                  Add to Wishlist
                </Button>
              </Box>

              {/* Accordion Section */}
              <Box>
                {[
                  "Have a question?",
                  "Shipping & Returns",
                  "Warranty",
                  "Payment",
                  "Price",
                ].map((title, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      boxShadow: "none",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                        {title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontSize: 13, color: "gray" }}>
                        Details for {title} will appear here.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
              <Card
                sx={{
                  mt: 3,
                  borderRadius: 2,
                  boxShadow: "rgba(0,0,0,0.1) 0px 1px 3px",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Avatar
                  src={UserIMg}
                  alt="artist"
                  sx={{ width: 56, height: 56, mx: "auto", mb: 1 }}
                />
                <Typography sx={{ fontWeight: 600 }}>
                  Bridget Riley
                </Typography>
                <Typography sx={{ fontSize: 14, color: "gray" }}>
                  United Kingdom
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    borderRadius: 10,
                    backgroundColor: "#0000ff",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#0000cc" },
                  }}
                >
                  + Follow
                </Button>
              </Card>
              <Card
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "#f3f1ff",
                  borderRadius: 2,
                  boxShadow: "none",
                }}
              >
                <Box display="flex" alignItems="flex-start">
                  <ChatBubbleIcon sx={{ color: "#0000ff", mr: 1, mt: 0.3 }} />
                  <Typography sx={{ fontSize: 14 }}>
                    Don't delay, there are{" "}
                    <Typography
                      component="span"
                      sx={{ color: "#0000ff", fontWeight: 500 }}
                    >
                      5 collectors
                    </Typography>{" "}
                    who are also interested in this work
                  </Typography>
                </Box>
              </Card>
              <Card
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "#ffedb8",
                  borderRadius: 2,
                  boxShadow: "none",
                }}
              >
                <Box display="flex" alignItems="center">
                  <StarIcon sx={{ color: "#0000ff", mr: 1 }} />
                  <Typography sx={{ fontWeight: 600 }}>
                    Artist highlights
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 14, mt: 0.5, ml: 3 }}>
                  • Famous Artist
                </Typography>
              </Card>
            </Box>
          </Col>
        </Row>
        </Box>
       
      </Box>

      <AllProductSection/>
      <BridgetRileySection />
    </>
  );
};

export default BridgetSection;
