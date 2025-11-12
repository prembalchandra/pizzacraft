import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import pizzaImg from "../assets/our-story.png";

const FoodDeliverySection = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: "50px 0",
      }}
    >
      <Box className="scrn-container">
        <Row className="align-items-center">
          <Col xs={12} md={5}>
            <CardMedia
              component="img"
              image={pizzaImg}
              alt="Pizza Delivery"
              sx={{
                width: "100%",
               
              }}
            />
          </Col>

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
                Hot and Delicious Pizza Delivered to Your Doorstep
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                Craving a cheesy, crispy pizza? Enjoy fresh, hot, and tasty pizzas 
                from your favorite local pizzerias without leaving your home. 
                Our platform makes it easy to <strong>order pizza online</strong> quickly 
                and conveniently.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#000", mb: 3, lineHeight: 1.7 }}
              >
                Choose from classic Margherita, pepperoni, veggie-loaded, or 
                gourmet pizzas. Customize your toppings, crust, and size, 
                and track your order in real-time for the ultimate pizza experience.
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0b36e8", mt: 3 }}
              >
                For Pizza Lovers
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
                Browse pizza menus, choose your favorite toppings, and get your pizza delivered hot, fresh, and cheesy, right to your door.
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0b36e8" }}
              >
                For Pizzerias
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
                Join our platform to reach pizza lovers, manage orders efficiently, and grow your pizzeria business with our reliable delivery network.
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
                  Order Pizza Now
                </Button>
              </Box>
            </Box>
          </Col>
        </Row>
      </Box>
    </Box>
  );
};

export default FoodDeliverySection;
