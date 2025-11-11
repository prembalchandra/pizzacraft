import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import bag1 from "../assets/vp-9.png";
import bag2 from "../assets/vp-9.png";
import bag3 from "../assets/vp-9.png";
import bag4 from "../assets/vp-9.png";

const orders = [
  {
    id: 1,
    image: bag1,
    title: "IMPULSE Laptop Backpack Inspire 16 Inch ...",
    color: "Black",
    price: 554,
    cancelledDate: "May 21, 2024",
  },
  {
    id: 2,
    image: bag2,
    title: "American Tourister Casual Backpack 15 Inch ...",
    color: "Blue",
    price: 899,
    cancelledDate: "June 10, 2024",
  },
  {
    id: 3,
    image: bag3,
    title: "Safari School Laptop Bag 17 Inch ...",
    color: "Grey",
    price: 699,
    cancelledDate: "July 15, 2024",
  },
  {
    id: 4,
    image: bag4,
    title: "Wildcraft 20L Compact Backpack ...",
    color: "Red",
    price: 749,
    cancelledDate: "August 2, 2024",
  },
];

const CancelledOrders = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {orders.map((order) => (
          <Grid item xs={12} md={6} key={order.id}
          
           sx={{
            width:"100%"
           }}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                borderColor: "#e0e0e0",
                boxShadow: 0,
                transition: "all 0.3s ease",
                cursor:"pointer",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderColor: "#ccc",
                },
                
              }}
            >
              <CardMedia
                component="img"
                image={order.image}
                alt={order.title}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 1,
                  objectFit: "contain",
                  mr: 2,
                }}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {order.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mt: 0.5 }}>
                  Color: {order.color}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  ₹{order.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    mt: 0.5,
                  }}
                >
                  <CircleIcon sx={{ color: "red", fontSize: 10, mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    Cancelled on {order.cancelledDate}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CancelledOrders;
