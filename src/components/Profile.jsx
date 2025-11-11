import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import ProfileSidebar from "../ProfileComponents/PorfileSidebar";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Myprofile from "../ProfileComponents/Myprofile";
import Myorders from "../ProfileComponents/Myorders"
import ManageAddresses from "../ProfileComponents/ManageAddresses"
import FAQPage from "../ProfileComponents/FAQPage"

const ProfilePage = ({ setIsLoggedIn }) => {
  const [selectedPage, setSelectedPage] = useState("profile");

  const renderContent = () => {
    switch (selectedPage) {
      case "profile":
        return <Myprofile />; 

      case "Myorder":
        return  <Myorders />;

      case "ManageAddresses":
        return <ManageAddresses/>;

      case "FAQPage":
        return <FAQPage/>


      default:
        return <Typography>Select a menu option</Typography>;
    }
  };

  return (
    <Box component="profile-section">
      <Box className="scrn-container">
        <Box sx={{ padding: "50px 0" }}>
          <Row>
            <Col xs={12} md={4} lg={3}>
              <Grid>
                <ProfileSidebar
                  selectedPage={selectedPage}
                  onSelectPage={setSelectedPage}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </Grid>
            </Col>
            <Col xs={12} md={8} lg={9}>
              <Grid item>
                <Paper sx={{ p: 3 }}>{renderContent()}</Paper>
              </Grid>
            </Col>
          </Row>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
