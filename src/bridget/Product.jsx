import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
   Button,
  Box,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {  Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img12 from "../assets/product-img.jpeg";

const products = [
  {
    id: 1,
    img: img12,
    title: "Rosso desiderio",
    oldPrice: "₹400,000",
    newPrice: "₹338,500",
    details: "Acrylic on Linen · 60 x 50 cm",
  },
  {
    id: 2,
    img: img12,
    title: "Morning Flow",
    oldPrice: "₹260,000",
    newPrice: "₹210,000",
    details: "Oil on Canvas · 80 x 60 cm",
  },
  {
    id: 3,
    img: img12,
    title: "Vivid Shapes",
    oldPrice: "₹180,000",
    newPrice: "₹150,000",
    details: "Acrylic on Canvas · 70 x 50 cm",
  },
];

const ProductSection = () => {
  return (
    <Box className="product-section p-0">
         <Box 
           sx={{ display:"flex",
             justifyContent:"space-between",
             marginBottom:"20px",
             alignItems:"center"
           }}
          >
            <Box>
                <Typography
          variant="h4"
          align=" start"
          gutterBottom
          sx={{ fontWeight: "700", mb: 0 , fontSize:"18px"}}
        >
          Other artworks by Bridget Riley
        </Typography>
            </Box>
            <Box>
                 <Button
                         endIcon={<ArrowForward />}
                         variant="text"
                         sx={{
                           
                           color: "#000",
                           fontWeight: 600,
                           textTransform: "none",
                           fontSize:"14px"
                         }}
                       >
                        See all artworks from Bridget Riley
                       </Button>
            </Box>
         </Box>

        <Row className="g-4">
          {products.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12}>
              <Link
                to="/bridget"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.img}
                    alt={item.title}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>

                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 1 }}
                      align="center"
                    >
                      {item.title}
                    </Typography>

                    <Box
                      display="flex"
                      justifyContent="start"
                      alignItems="start"
                      gap={1}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        {item.oldPrice}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#053F44", fontWeight: 600 }}>
                        {item.newPrice}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ color: "gray", mt: 1 }}
                    >
                      {item.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
    </Box>
  );
};

export default ProductSection;
