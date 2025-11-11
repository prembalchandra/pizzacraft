import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import nachosImg from "../assets/vp-9.png";
import steakImg from "../assets/vp-4.png";
import sushiImg from "../assets/vp-11.png";
import dumplingsImg from "../assets/vp-7.png";

const restaurants = [
  {
    id: 1,
    name: "Poultry Palace",
    desc: "Chicken quesadilla, avocado...",
    image: nachosImg,
    offer: "50% OFF",
    upto: "$2",
    rating: 3.9,
    location: "New...",
    distance: "3.2 km",
    time: "25 min",
  },
  {
    id: 2,
    name: "Ribeye Junction",
    desc: "Chicken quesadilla, avocado...",
    image: steakImg,
    offer: "50% OFF",
    upto: "$2",
    rating: 3.2,
    exclusive: true,
    location: "Calif...",
    distance: "1 km",
    time: "10 min",
  },
  {
    id: 3,
    name: "The Grill Master’s",
    desc: "Bread, Eggs, Butter, Fries...",
    image: sushiImg,
    rating: 4.3,
    location: "New...",
    distance: "5 km",
    time: "40 min",
  },
  {
    id: 4,
    name: "Cozy Cuppa Cafe",
    desc: "cheesecake, waffles, Cakes,...",
    image: dumplingsImg,
    rating: 3.6,
    location: "Dall...",
    distance: "4 km",
    time: "30 min",
  },
   {
    id: 5,
    name: "Cozy Cuppa Cafe",
    desc: "cheesecake, waffles, Cakes,...",
    image: dumplingsImg,
    rating: 3.6,
    location: "Dall...",
    distance: "4 km",
    time: "30 min",
  },

   {
    id: 6,
    name: "Cozy Cuppa Cafe",
    desc: "cheesecake, waffles, Cakes,...",
    image: dumplingsImg,
    rating: 3.6,
    location: "Dall...",
    distance: "4 km",
    time: "30 min",
  },
   {
    id: 7,
    name: "The Grill Master’s",
    desc: "Bread, Eggs, Butter, Fries...",
    image: sushiImg,
    rating: 4.3,
    location: "New...",
    distance: "5 km",
    time: "40 min",
  },
    {
    id: 9,
    name: "Ribeye Junction",
    desc: "Chicken quesadilla, avocado...",
    image: steakImg,
    offer: "50% OFF",
    upto: "$2",
    rating: 3.2,
    exclusive: true,
    location: "Calif...",
    distance: "1 km",
    time: "10 min",
  },
];

export default function FeaturedRestaurants() {
  return (
    <Box  component="section" sx={{
        padding:"50px 0"
    }}>
      <Box className="scrn-container">
        <Typography variant="h4" fontWeight={700} mb={3}>
          Featured Restaurants
        </Typography>

        <Row>
          {restaurants.map((res) => (
            <Col xs={12} sm={6} md={3} key={res.id}>
              <Card
                sx={{
                  position: "relative",
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: 2,
                  marginBottom: "20px",
                  overflow: "hidden",
                  padding: "12px",
                  backgroundColor: "#fff !important;",
                  border: "1px solid #e8e8e8",
                  color: "#000  !important;",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  },
                  "& .zoom-img": {
                    transition: "transform 0.6s ease",
                  },
                  "&:hover .zoom-img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {res.exclusive && (
                  <Chip
                    label="Exclusive"
                    color="warning"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      zIndex:"1",
                      fontWeight: 600,
                      backgroundColor: "#FF7B00",
                      color: "white",
                    }}
                  />
                )}

                <Box
                  sx={{
                    borderRadius: "6px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={res.image}
                    alt={res.name}
                    className="zoom-img"
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      transition: "transform 0.6s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  />

                  {res.offer && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        p: "6px 10px",
                        borderRadius: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        upto {res.upto}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        {res.offer}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ padding:"0 !important", marginTop:"10px" }}>
                  <Typography
                    variant="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "rgba(var(--dark-text), 1)",
                        fontSize: "calc(15px + 5 * (100vw - 320px) / 1600)",
                        fontWeight: 600,
                        lineHeight: "normal",
                        transition: "0.4s ease",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "hidden",
                      }}
                    >
                      {res.name}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.3}>
                      <StarIcon sx={{ color: "#2ECC71", fontSize: 18 }} />
                      <Typography variant="body2" fontWeight={600}>
                        {res.rating}
                      </Typography>
                    </Stack>
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5, 
                        borderBottom:"1px dashed #e8e8e8",
                        paddingBottom:"4px"
                    }}
                  >
                    {res.desc}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mt: 1.5 }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      • {res.location}
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <RoomIcon sx={{ fontSize: 16, color: "#FF7B00" }} />
                      <Typography variant="caption">{res.distance}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <AccessTimeIcon sx={{ fontSize: 16, color: "#FF7B00" }} />
                      <Typography variant="caption">{res.time}</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Col>
          ))}
        </Row>
      </Box>
    </Box>
  );
}
