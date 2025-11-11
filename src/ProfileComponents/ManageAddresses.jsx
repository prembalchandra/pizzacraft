import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  IconButton,
  Chip,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ManageAddresses = () => {
  const [addresses, setAddresses] = useState([
    {
      type: "WORK",
      name: "Balchandra",
      phone: "8115494617",
      address: "C-81, sector 8, Noida, Uttar Pradesh - 201301",
    },
    {
      type: "HOME",
      name: "Balchandra",
      phone: "8115494617",
      address:
        "E159, Saraswati vihar khora colony, Ghaziabad, Uttar Pradesh - 201001",
    },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type: "",
  });

  const handleMenuOpen = (event, address) => {
    setAnchorEl(event.currentTarget);
    setSelectedAddress(address);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddAddressClick = () => {
    setShowForm(!showForm);
    setEditIndex(null);
    setFormData({ name: "", phone: "", address: "", type: "" });
  };

  const handleDelete = () => {
    if (selectedAddress) {
      const filtered = addresses.filter((a) => a !== selectedAddress);
      setAddresses(filtered);
    }
    handleMenuClose();
  };

  const handleEdit = () => {
    const index = addresses.findIndex((a) => a === selectedAddress);
    if (index !== -1) {
      setEditIndex(index);
      setFormData(addresses[index]);
    }
    handleMenuClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = formData;
      setAddresses(updated);
      setEditIndex(null);
    } else {
      setAddresses([...addresses, formData]);
    }
    setFormData({ name: "", phone: "", address: "", type: "" });
    setShowForm(false);
  };

  const customFieldStyle = {
    variant: "outlined",
    fullWidth: true,
    InputProps: {
      style: {
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        padding: "4px",
        fontSize: "16px",
      },
    },
    sx: {
      marginBottom: "24px",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ccc",
        },
        "&:hover fieldset": {
          borderColor: "#050644ff",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#050644ff",
          borderWidth: "1px",
        },
        "& input": {
          padding: "10px",
          fontSize: "16px",
        },
      },
    },
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Manage Addresses
      </Typography>

      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          bgcolor: "#fff",
          mb: 3,
          p: 2,
        }}
      >
        <Button
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
          onClick={handleAddAddressClick}
        >
          Add a New Address
        </Button>

        {showForm && (
          <Box
            sx={{
              borderTop: "1px solid #bcbbbb",
              marginTop: "10px",
            }}
          >
            <Box
              component="form"
              sx={{
                marginTop: "20px",
              }}
            >
              <Row>
                <Col md={6}>
                  <TextField
                    label="Full Name"
                    name="name"
                    {...customFieldStyle}
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    {...customFieldStyle}
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Address"
                    name="address"
                    {...customFieldStyle}
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    fullWidth
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Address Type"
                    name="type"
                    {...customFieldStyle}
                    value={formData.type}
                    onChange={handleChange}
                    fullWidth
                  />
                </Col>
                <Col md={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        padding: "10px 20px",
                        borderRadius: 100,
                        background: "linear-gradient(to right, #fff, #ffc107)",
                        color: "#000",
                        fontWeight: 500,
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #fff, #ffc107)",
                        },
                      }}
                      onClick={handleSave}
                    >
                      Save Address
                    </Button>
                  </Box>
                </Col>
              </Row>
            </Box>
          </Box>
        )}
      </Box>

      <Grid container spacing={2}>
        {addresses.map((item, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              width: "100%",
            }}
          >
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                transition: "0.3s",
                width: "100%",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transform: "scale(1.01)",
                },
              }}
            >
              <CardContent sx={{ position: "relative", width: "100%" }}>
                <Chip
                  label={item.type}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    bgcolor: "#f5f5f5",
                    fontWeight: 600,
                  }}
                />
                <IconButton
                  sx={{ position: "absolute", top: 10, right: 10 }}
                  size="small"
                  onClick={(e) => handleMenuOpen(e, item)}
                >
                  <MoreVertIcon />
                </IconButton>

                {editIndex === index ? (
                  <Box
                    sx={{
                      marginTop: "40px",
                    }}
                  >
                    <Row>
                      <Col md={6}>
                        <TextField
                          label="Full Name"
                          {...customFieldStyle}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Col>

                      <Col md={6}>
                        <TextField
                          label="Phone Number"
                          {...customFieldStyle}
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Col>
                      <Col md={6}>
                        <TextField
                          label="Address"
                          name="address"
                          {...customFieldStyle}
                          value={formData.address}
                          onChange={handleChange}
                          fullWidth
                          rows={3}
                        />
                      </Col>
                      <Col md={6}>
                        <TextField
                          label="Address Type"
                          name="type"
                          {...customFieldStyle}
                          value={formData.type}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Col>
                      <Col md={3}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              padding: "10px 20px",
                              borderRadius: 100,
                              background:
                                "linear-gradient(to right, #fff, #ffc107)",
                              color: "#000",
                              fontWeight: 500,
                              "&:hover": {
                                background:
                                  "linear-gradient(to right, #fff, #ffc107)",
                              },
                            }}
                            onClick={handleSave}
                          >
                            Update
                          </Button>
                        </Box>
                      </Col>
                    </Row>
                  </Box>
                ) : (
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, display: "inline-block", mr: 2 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ display: "inline-block" }}
                    >
                      {item.phone}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.2 }}>
                      {item.address}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 2,
          sx: {
            borderRadius: 2,
            mt: 1,
            minWidth: 120,
          },
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default ManageAddresses;
