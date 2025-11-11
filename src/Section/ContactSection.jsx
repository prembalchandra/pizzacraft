import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Phone, Email, LocationOn, Home } from "@mui/icons-material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommonHeroSection from "./CommonHerosection";
import heroImg from "../assets/Banner/bg.jpg";
const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 35, color: "#1800a1" }} />,
      title: "Phone",
      detail: "(+1) 618 190 496",
    },
    {
      icon: <Email sx={{ fontSize: 35, color: "#1800a1" }} />,
      title: "Email",
      detail: "geweto9420@chokxus.com",
    },
    {
      icon: <LocationOn sx={{ fontSize: 35, color: "#1800a1" }} />,
      title: "London Office",
      detail: "Cruce Casa de Postas 29",
    },
    {
      icon: <Home sx={{ fontSize: 35, color: "#1800a1" }} />,
      title: "Bournemouth Office",
      detail: "Visitación de la Encina",
    },
  ];
  return (
    <>
      <Box>
        <CommonHeroSection
          title="Contact"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
      </Box>
      <Box
        component="section"
        sx={{ backgroundColor: "#f5f7f8", padding: "40px 0" }}
      >
        <Box className="scrn-container">
          <Box
            sx={{ mb: 4, display: "flex", flexDirection: "column", gap: "6px" }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Inform us of Yourself
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 0 }}>
              Contact us if you have any queries or merely want to say hi.
            </Typography>
          </Box>
          <Box>
            <Row>
              {contactInfo.map((item, index) => (
                <Col item xs={12} sm={6} md={6} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 3,
                      borderRadius: 3,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      marginBottom: "10px",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000",
                        mr: 2,
                        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#333" }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </Box>
                </Col>
              ))}
            </Row>
          </Box>

          <Box>
            <Row>
              <Col xs={12} md={6}>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mt: 3,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    padding: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Your Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#1800a1",
                      "&:hover": { bgcolor: "#1800a1" },
                      fontWeight: "bold",
                      py: 1.2,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Col>
              <Col xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "430px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    padding: "20px",
                    borderRadius: "8px",
                    mt: 4,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28013.74063717489!2d77.27570345!3d28.63822535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762584421006!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </Box>
              </Col>
            </Row>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;
