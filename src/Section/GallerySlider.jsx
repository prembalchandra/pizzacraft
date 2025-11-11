import React from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia, Typography, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img12 from "../assets/product-img.jpeg";

const galleryData = [
  {
    img: img12,
    title: "Artful autumn - curation by Lynn Mandeau",
    subtitle: "BY GALLERY CURATION",
  },
  {
    img: img12,
    title: "Modern abstracts - curated by Alan Price",
    subtitle: "BY GALLERY CURATION",
  },
  {
    img: img12,
    title: "Nature’s palette - selected by Julia Wong",
    subtitle: "BY GALLERY CURATION",
  },
  {
    img: img12,
    title: "Vibrant tones - collection by Mark Silva",
    subtitle: "BY GALLERY CURATION",
  },
  {
    img: img12,
    title: "Evening harmony - curated by Alex Turner",
    subtitle: "BY GALLERY CURATION",
  },
];

const GallerySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="gallery-section">
      <Container>
        <Box className="gallery-content">
          <Typography variant="h5" className="gallery-heading">
            Featured Curations
          </Typography>

          <Slider {...settings}>
            {galleryData.map((item, i) => (
              <Box key={i} className="gallery-box">
                <Card className="gallery-card">
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    className="gallery-img"
                  />
                  <Box className="gallery-overlay">
                    <Typography className="gallery-subtitle">
                      {item.subtitle}
                    </Typography>
                    <Typography className="gallery-title">
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </section>
  );
};

export default GallerySlider;
