import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
import {
  Person,
  ShoppingBag,
  LocationOn,
  HelpOutline,
  Logout,
} from "@mui/icons-material";

const menuItems = [
  { key: "profile", icon: <Person />, text: "Change Profile" },
  { key: "Myorder", icon: <ShoppingBag />, text: "My Orders" },
  { key: "ManageAddresses", icon: <LocationOn />, text: "Manage Addresses" },
  { key: "FAQPage", icon: <HelpOutline />, text: "Help" },
];

const ProfileSidebar = ({ selectedPage, onSelectPage, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false); 
  };
  return (
    <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #536cc6ff, #0021f5ff)",
          p: 4,
          textAlign: "center",
        }}
      >
        <Avatar
          src="https://via.placeholder.com/100"
          sx={{
            width: 100,
            height: 100,
            mx: "auto",
            mb: 2,
            border: "3px solid white",
          }}
        />
        <Typography variant="h6" color="white">
          Mark Jecno
        </Typography>
        <Typography variant="body2" color="white">
          mark-jecno@gmail.com
        </Typography>
      </Box>
      <List sx={{ py: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.key}
            selected={selectedPage === item.key}
            onClick={() => onSelectPage(item.key)}
            sx={{
              borderLeft:
                selectedPage === item.key
                  ? "3px solid #3a3ad4ff"
                  : "3px solid transparent",
              bgcolor:
                selectedPage === item.key ? "rgba(38, 0, 255, 0.08)" : "transparent",
              "&:hover": { bgcolor: "rgba(98, 0, 255, 0.15)" },
            }}
          >
            <ListItemIcon
              sx={{ color: selectedPage === item.key ? "#3a3ad4ff" : "#000" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: selectedPage === item.key ? 600 : 400,
              }}
            />
          </ListItem>
        ))}

       <ListItem button onClick={handleLogout}>
          <ListItemIcon sx={{ color: "#000" }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ProfileSidebar;
