import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  TextField,
  Button,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import BottomNavLinks from "../components/BottomNavLinks";
import {  Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#232220",
          color: "#fff",
          padding: "50px 0 11px 0",
          "@media (max-width: 991px)": { paddingBottom: "13%" },
        }}
      >
        <Box className="scrn-container">
         <Box sx={{
          marginBottom:"40px",
           borderBottom: "1px solid #e8e7eaff",
           paddingBottom:"15px"
         }}>
          <Row className="align-items-center">
            <Col md={5} >
              <Typography
                variant="h6"
                textAlign="start"
                sx={{
                color:"#fff",
                  fontSize: "calc(15px + 5 * (100vw - 320px) / 1600)",
                  lineHeight: 1.7
                }}
              >
                Don't pass up our fantastic discounts. Email offers from all of our best eateries
              </Typography>
            </Col>

           <Col md={7} >
            <Box sx={{ display: "flex", gap: 1,  justifyContent:"end" }}>
              <TextField
                placeholder="Search for Restaurant"
                variant="outlined"
                fullWidth
                sx={{
                  maxWidth: 400,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 100,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    "& input": { padding: "12px 20px", color: "#fff" },
                    "&.Mui-focused fieldset": { borderColor: "transparent" }
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#ffc107" }} />
                    </InputAdornment>
                  )
                }}
              />
              <Button
                variant="contained"
                sx={{
              borderRadius: 100,
              padding:"10px 20px",
              background: "linear-gradient(to right, #fff, #ffc107)",
              color: "#000",
              fontWeight: 500,
              "&:hover": {
                    background: "linear-gradient(to right, #fff, #ffc107)",
              },
            }}
              >
                Subscribe Now
              </Button>
            </Box>
           </Col>
          </Row>
         </Box>

        
          <Box className="footer_link-area">
            <Grid
            container
            spacing={4}
            sx={{
              display: "grid",
              gridTemplateAreas: `"famous-artists for-creators customer-service about-us"`,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@media (max-width: 900px)": {
                gridTemplateAreas: `"famous-artists" "for-creators" "customer-service" "about-us"`,
                gridTemplateColumns: "1fr"
              }
            }}
          >
         
            <Box sx={{ gridArea: "famous-artists" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  mb: 2,
                  fontSize: "16px",
                  borderBottom: "1px solid #fff",
                  fontFamily: "'Josefin Sans', sans-serif"
                }}
              >
                Famous Artists on Singulart
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Henri Matisse", "Marc Chagall", "Pablo Picasso", "Salvador Dalí", "Banksy", "Mr. Brainwash", "Shepard Fairey"].map((artist, index) => (
                  <li key={index}>
                    <Link href="#" color="inherit" underline="hover">{artist}</Link>
                  </li>
                ))}
              </ul>
            </Box>

            
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", gridArea: "for-creators" }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontSize: "16px", borderBottom: "1px solid #fff", fontFamily: "'Josefin Sans', sans-serif" }}>
                  For Creators
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Join Singulart as an Artist", "Log in as an Artist"].map((item, index) => (
                    <li key={index}><Link href="#" color="inherit" underline="hover">{item}</Link></li>
                  ))}
                </ul>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontSize: "16px", borderBottom: "1px solid #fff", fontFamily: "'Josefin Sans', sans-serif" }}>
                  Galleries
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Art galleries in United States", "Art galleries in United Kingdom", "Art galleries in Canada", "Art galleries in Australia"].map((item, index) => (
                    <li key={index}><Link href="#" color="inherit" underline="hover">{item}</Link></li>
                  ))}
                </ul>
              </Box>
            </Box>

        
            <Box sx={{ gridArea: "customer-service" }}>
              <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontSize: "16px", fontFamily: "'Josefin Sans', sans-serif", borderBottom: "1px solid #fff" }}>
                Customer Service
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Contact us", "Shipping", "Return policy", "Customer testimonials", "Offer a gift card", "Join our trade program", "My account", "FAQ"].map((service, index) => (
                  <li key={index}><Link href="#" color="inherit" underline="hover">{service}</Link></li>
                ))}
              </ul>
            </Box>

           
            <Box sx={{ gridArea: "about-us" }}>
              <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontSize: "16px", borderBottom: "1px solid #fff", fontFamily: "'Josefin Sans', sans-serif" }}>
                About Us
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                {["About us", "Affiliates", "Our artists", "Singulart Magazine", "Jobs"].map((info, index) => (
                  <li key={index}><Link href="#" color="inherit" underline="hover">{info}</Link></li>
                ))}
              </ul>
            </Box>
          </Grid>
          </Box>

          {/* Bottom Divider */}
          <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />


          <Box sx={{ paddingTop: "15px", borderTop: "1px solid #fff", position: "relative" }}>
            <Grid sx={{ display:"flex", justifyContent:"space-between", alignContent:"center", flexWrap:"wrap", gap:"20px" }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                  @ Copyright 2024  <Link href="#" underline="hover" sx={{ color: "#fff", ml: 1 }}>ZOMO.</Link> All rights Reserved.
                 
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8} sx={{ textAlign: { xs: "left", sm: "right" } }}>
                <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, gap: 2, mb: 1 }}>
                  <Link href="#" color="inherit"><FacebookIcon sx={{ color: "#fff" }} /></Link>
                  <Link href="#" color="inherit"><InstagramIcon sx={{ color: "#fff" }} /></Link>
                  <Link href="#" color="inherit"><PinterestIcon sx={{ color: "#fff" }} /></Link>
                </Box>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* BottomNavLinks visible only below 991px */}
      <Box sx={{ "@media (min-width: 991px)": { display: "none" } }}>
        <BottomNavLinks />
      </Box>
    </>
  );
};

export default Footer;
