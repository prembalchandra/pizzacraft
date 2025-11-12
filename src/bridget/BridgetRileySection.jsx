import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import artistImg from "../assets/24.webp"; 

const BridgetRileySection = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box className="scrn-container">
        <Row className="align-items-center">
          <Col lg={7} md={12}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, color: "#111" }}
            >
              Bridget Riley
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#666", mb: 2 }}>
              United Kingdom
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0000cc",
                textTransform: "none",
                borderRadius: "20px",
                px: 3,
                mb: 2,
              }}
            >
              Follow
            </Button>

            <Typography
              variant="body2"
              sx={{ color: "#555", fontWeight: 600, mt: 3 }}
            >
              CREDENTIALS
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              • Famous Artist
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Entering in the dynamic, visually stimulating art of Bridget Riley,
              a pioneering figure in the Op art movement. Her work is a symphony
              of color, line, and geometric patterns, creating captivating optical
              illusions that challenge and intrigue the viewer.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Born in London in 1931, Riley's artistic journey began at
              Goldsmiths College and later at the Royal College of Art. Her early
              exposure to Georges Seurat and Futurist and Constructivist artists
              influenced her approach. Riley rose to prominence in the 1960s with
              works like "Fall," showcasing her signature style of optical
              illusions and dynamic visual effects.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              To possess a piece by Bridget Riley is to engage with art that
              transcends traditional boundaries. Her work invites viewers to
              explore the complexities of color and form.
            </Typography>

            <Button
              endIcon={<ArrowForward />}
              variant="text"
              sx={{
                mt: 2,
                color: "#000",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Go to Bridget Riley's page
            </Button>
          </Col>
          <Col lg={5} md={12} className="text-center mt-4 mt-lg-0">
            <img
              src={artistImg}
              alt="Bridget Riley"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Box>
    </Box>
  );
};

export default BridgetRileySection;
