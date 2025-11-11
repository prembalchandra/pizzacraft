import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Myprofile = () => {
  const [name, setName] = useState("Mark Jecno");
  const [email, setEmail] = useState("mark-jecno@gmail.com");
  const [phone, setPhone] = useState("+1 (692)52 - 95555");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("Uttar Pradesh");
  const [district, setDistrict] = useState("Noida");
  const [city, setCity] = useState("Noida");
  const [pinCode, setPinCode] = useState("201309");
  const [address, setAddress] = useState("Industrial Area, Sector 62");
  const [gender, setGender] = useState("");

  const handleUpdateProfile = () => {
    alert("Profile Updated!");
    console.log({
      name,
      email,
      phone,
      password,
      state,
      district,
      city,
      pinCode,
      address,
      gender,
    });
  };

  const customFieldStyle = {
    variant: "outlined",
    fullWidth: true,
    InputProps: {
      style: {
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        padding: "4px",
      },
    },
    sx: {
      marginBottom: "35px",
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
        },
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "13px",
      }}
    >
      <Box
        sx={{
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "18px", md: "24px" },
            color: "#000",
          }}
        >
          Change Profile
        </Typography>
      </Box>

      <Row>
        <Col xs={12} md={6}>
          <FormControl fullWidth sx={{ marginBottom: "35px" }}>
            <FormLabel sx={{ color: "#0009", fontWeight: 400, fontSize:"14px" }}>
              Your Gender
            </FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: "#0009",
                      padding:"4px",
                      "&.Mui-checked": { color: "#0009" },
                    }}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: "#050644ff",
                      "&.Mui-checked": { color: "#050544ff" },
                    }}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    sx={{
                      color: "#050644ff",
                      "&.Mui-checked": { color: "#050644ff" },
                    }}
                  />
                }
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>

        <Col xs={12} md={6}>
          <TextField
            {...customFieldStyle}
            label="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </Col>

        <Col xs={12} style={{ display: "flex", justifyContent: "end" }}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={handleUpdateProfile}
              sx={{
              px: 5,
              py: 1.5,
              borderRadius: 100,
              background: "linear-gradient(to right, #fff, #ffc107)",
              color: "#000",
              fontWeight: 500,
              "&:hover": {
                    background: "linear-gradient(to right, #fff, #ffc107)",
              },
            }}
            >
              Update Profile
            </Button>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};

export default Myprofile;
