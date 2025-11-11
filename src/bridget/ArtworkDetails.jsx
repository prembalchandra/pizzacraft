import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import art1 from "../assets/1.webp";
import art2 from "../assets/12.webp";
import art3 from "../assets/13.webp";

const ArtworkDetails = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: "#fff" , padding:"40px 0 " }}>
        <Box
        
        sx={{
            borderBottom:"1px solid #0000001a",
            paddingBottom:"10px",
            marginBottom:"20px"
        }}
        >
          <Typography
          variant="span"
          sx={{
            color: "#0000cc",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: 1,
            paddingBottom:"13px",
            borderBottom:"2px solid #0000cc"
          }}
        >
          Information
        </Typography>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Artwork details
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Medium:</strong> Screen Printing
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Dimensions:</strong> 62x85.5 cm
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          About this artwork
        </Typography>

        <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
          Limited edition. Edition of 75. Hand-signed by the artist, blind-stamped,
          dated, and numbered on the lower left frame. Published by the artist.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {["Screen Printing", "Everyday Life", "Fine Art"].map((tag, i) => (
            <Button
              key={i}
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                color: "#000",
                borderColor: "#ccc",
              }}
            >
              {tag}
            </Button>
          ))}
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Discover the creation in interiors
        </Typography>

        <Box sx={{ mb: 2, maxWidth: "250px" }}>
          <Select fullWidth defaultValue="Living room" size="small">
            <MenuItem value="Living room">Living room</MenuItem>
            <MenuItem value="Bedroom">Bedroom</MenuItem>
            <MenuItem value="Office">Office</MenuItem>
          </Select>
        </Box>

        <Slider {...sliderSettings}>
          {[art1, art2, art3, art1].map((img, i) => (
            <Box key={i} sx={{  }}>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  padding:"0px !important",
                  margin:'0 4px ',
                  paddingBottom:"0 !important",
                 
                }}
              >
                <CardContent  sx={{ padding:"0 !important",}}>
                  <img
                    src={img}
                    alt={`Artwork ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      
    </Box>
  );
};

export default ArtworkDetails;
