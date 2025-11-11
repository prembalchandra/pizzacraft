import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  Badge,
} from "@mui/material";
import { Logout, ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent:"end",
        gap: "4px !important",
        color: "#fff",
        "@media (max-width: 991px)": {
            gap:"7px"
          },
      }}
    >
      <IconButton
        onClick={() => navigate("/cart")}
        sx={{ color: "#000", position: "relative",
            width:"30px",
            height:"30px",
            borderRadius:"50px",
            padding:"20px",
            backgroundColor:"#eee",
             border:"1px solid #636363ff;",
         }}
      >
        <Badge
          badgeContent={5}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#f5a623",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.75rem",
            },
          }}
        >
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>

      <Box
        sx={{
          width: "1px",
          height: "28px",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />

      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap:"10px"
        }}
      >
        <Box
         sx={{
            border:"1px solid #000;",
            width:"40px",
            height:"40px",
            borderRadius:"50px"
         }}
         >
            <Avatar
          alt="User"
          src="https://i.pravatar.cc/300"
          sx={{ width: 40, height: 40, mr: 1 }}
        />
        </Box>
        <Box
         sx={{
            "@media (max-width: 991px)": {
            display:"none"
          },
         }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500, color:"#000" }}>
            Hi, Mark Jecno
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, color: "#000", lineHeight: 1 }}
          >
            My Account
          </Typography>
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1,
            borderRadius: 2,
            minWidth: 220,
            backgroundColor: "#fff",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "#053F44" }}
          >
            Account Menu
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={() => handleNavigate("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleNavigate("/my-orders")}>
          My Orders
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/saved-address")}>
          Saved Address
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/saved-cards")}>
          Saved Cards
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/settings")}>
          Settings
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => handleNavigate("/logout")}
          sx={{ color: "#f5a623", fontWeight: 600 }}
        >
          <Logout sx={{ mr: 1, fontSize: 20 }} /> Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
