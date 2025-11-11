import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Home, FavoriteBorder, ShoppingCart, Person } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const BottomNavLinks = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const menuItems = [
    { id: "home", label: "Home", icon: <Home />, path: "/" },
    { id: "wishlist", label: "Wishlist", icon: <FavoriteBorder />, path: "/wishlist" },
    { id: "cart", label: "Cart", icon: <ShoppingCart />, path: "/cart" },
    { id: "profile", label: "Profile", icon: <Person />, path: "/profile" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 -4px 15px rgba(0,0,0,0.1)",
        py: 1.2,
        zIndex: 999,
      }}
    >
      {menuItems.map((item) => (
        <Button
          key={item.id}
          component={Link}
          to={item.path}
          onClick={() => setActive(item.path)}
          sx={{
            flexDirection: "column",
            textTransform: "none",
            color: active === item.path ? "#0b08c8" : "#555",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#f7941d",
              background: "transparent",
            },
          }}
        >
          {item.icon}
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              fontWeight: active === item.path ? 600 : 400,
            }}
          >
            {item.label}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default BottomNavLinks;
