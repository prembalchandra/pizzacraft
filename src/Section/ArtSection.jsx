import React from "react";
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";
import { Row, Col } from "react-bootstrap";

const FoodDeliverySection = () => {
  const foodImg =
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"; // sample food image

  return (
    <Box
      sx={{
        backgroundColor: "#aeacbb85",
        py: 8,
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#0b36e8",
                  mb: 3,
                }}
              >
                Delicious Meals Delivered to Your Doorstep
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                Enjoy fresh, hot, and tasty meals from your favorite local
                restaurants without leaving your home. Our platform makes it
                easy to <strong>order food online</strong> quickly and
                conveniently.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#000", mb: 3, lineHeight: 1.7 }}
              >
                Whether you're craving pizza, sushi, or healthy salads, we've
                got you covered. Track your order in real-time and enjoy your
                meal with ease.
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0b36e8", mt: 3 }}
              >
                For Customers
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  mb: 2,
                  lineHeight: 1.7,
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Browse menus, customize your orders, and get your favorite
                meals delivered hot and fresh, right to your door.
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0b36e8" }}
              >
                For Restaurants
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Join our platform to reach more customers, manage orders
                efficiently, and boost your business with our reliable delivery
                network.
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={2}>
                <Button
                  variant="contained"
                  sx={{
                      background: "linear-gradient(to right, #fff, #ffc107)",
                    color: "#000",
                    px: 4,
                    py: 1.2,
                    borderRadius: "25px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#ffc107",
                    },
                  }}
                >
                  Order Now
                </Button>

                <Button
                  variant="contained"
                  sx={{
                     background: "linear-gradient(to right, #071cffff, #fff )",
                    color: "#fff",
                    px: 4,
                    py: 1.2,
                    borderRadius: "25px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#ffc107",
                    },
                  }}
                >
                  Join as Restaurant
                </Button>

                
              </Box>
            </Box>
          </Col>

          <Col xs={12} md={5}>
            <CardMedia
              component="img"
              image={foodImg}
              alt="Food Delivery"
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                mt: { xs: 4, md: 0 },
              }}
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default FoodDeliverySection;
