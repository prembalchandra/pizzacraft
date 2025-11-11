import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountMenu from "../components/AccountMenu";

const Search = styled("div")(() => ({
  position: "relative",
  width: "100%",
  maxWidth: 600,
  borderBottom: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  paddingBottom: "4px",
}));

const StyledInputBase = styled(InputBase)(() => ({
  flex: 1,
  color: "#555",
  "& .MuiInputBase-input": {
    padding: "6px 6px 6px 32px",
    fontSize: "15px",
  },
}));

const menuItems = [
  { title: "Home", path: "/" },
  {
    title: "New In",
    submenu: [
      { name: "Latest Products", path: "/latest-products" },
      { name: "New Collections", path: "/new-collections" },
      { name: "Trending Items", path: "/trending-items" },
    ],
  },
  {
    title: "Painting",
    submenu: [
      { name: "Oil", path: "/painting/oil" },
      { name: "Acrylic", path: "/painting/acrylic" },
      { name: "Watercolor", path: "/painting/watercolor" },
    ],
  },
  {
    title: "Print",
    submenu: [
      { name: "Limited Edition", path: "/print/limited-edition" },
      { name: "Digital Print", path: "/print/digital" },
    ],
  },
  {
    title: "Photography",
    submenu: [
      { name: "Landscape", path: "/photography/landscape" },
      { name: "Portrait", path: "/photography/portrait" },
      { name: "Abstract", path: "/photography/abstract" },
    ],
  },
  { title: "Sculpture", path: "/sculpture" },
  { title: "Drawing", path: "/drawing" },
  { title: "Artists", path: "/artists" },
  { title: "Contact Us", path: "/contact" },
];
const TopHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const isMobile = useMediaQuery("(max-width:991px)");
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleCollapse = (title) => {
    setOpenCollapse((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#fff",
          color: "#000",
          top: 0,
          zIndex: 2,
        }}
      >
        {" "}
        <Box className="scrn-container">
          <Box
            sx={{
              px: 0,
              py: 1.5,
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "0px !important",
                padding: "0px !important",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {isMobile && (
                  <IconButton
                    sx={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid #000",
                      borderRadius: "6px",
                      marginRight: "calc(4px + 16 * (100vw - 320px) / 671)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                )}

                <Typography
                  variant="h6"
                  component={Link}
                  to="/"
                  sx={{
                    color: "#0B36E8",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                  }}
                >
                  Singulart
                </Typography>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <Search>
                  <SearchIcon
                    sx={{
                      position: "absolute",
                      left: 0,
                      color: "#aaa",
                      fontSize: 22,
                    }}
                  />
                  <StyledInputBase placeholder="Search for Photography" />
                </Search>
              </Box>

              <Box>
                <AccountMenu />
              </Box>
            </Toolbar>

            {!isMobile && (
              <Box
                sx={{
                  background: "#fff",
                  display: { xs: "none", md: "block" },
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: 4,
                    py: 1.2,
                    fontSize: "15px",
                    listStyle: "none",
                    m: 0,
                    p: 0,
                  }}
                >
                  {menuItems.map((item, i) => (
                    <Box key={i} component="li" sx={{ position: "relative" }}>
                      {item.submenu ? (
                        <Box
                          onClick={() => handleMenuClick(i)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            color: activeMenu === i ? "#0B36E8" : "#000",
                            fontWeight: 500,
                            "&:hover": { color: "#0B36E8" },
                          }}
                        >
                          {item.title}
                          {activeMenu === i ? (
                            <ExpandLess sx={{ fontSize: 20 }} />
                          ) : (
                            <ExpandMore sx={{ fontSize: 20 }} />
                          )}
                        </Box>
                      ) : (
                        <Typography
                          component={Link}
                          to={item.path}
                          sx={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: 500,
                            "&:hover": { color: "#0B36E8" },
                          }}
                        >
                          {item.title}
                        </Typography>
                      )}

                      {item.submenu && activeMenu === i && (
                        <Paper
                          elevation={3}
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            mt: 1,
                            p: 1,
                            minWidth: 200,
                            bgcolor: "#fff",
                            borderRadius: 1,
                          }}
                        >
                          {item.submenu.map((sub, idx) => (
                            <Typography
                              key={idx}
                              component={Link}
                              to={sub.path}
                              sx={{
                                display: "block",
                                px: 2,
                                py: 1,
                                textDecoration: "none",
                                color: "#333",
                                fontSize: "14px",
                                borderRadius: 0.5,
                                "&:hover": {
                                  bgcolor: "#f5f5f5",
                                  color: "#0B36E8",
                                },
                              }}
                            >
                              {sub.name}
                            </Typography>
                          ))}
                        </Paper>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </AppBar>

      {isMobile && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 270, height: "100%", bgcolor: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                Menu
              </Typography>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />

            <List>
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItemButton
                    component={item.path ? Link : "div"}
                    to={item.path || "#"}
                    onClick={() => item.submenu && handleCollapse(item.title)}
                  >
                    <ListItemText primary={item.title} />
                    {item.submenu ? (
                      openCollapse[item.title] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItemButton>

                  {item.submenu && (
                    <Collapse
                      in={openCollapse[item.title]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.submenu.map((sub, idx) => (
                          <ListItemButton
                            key={idx}
                            sx={{ pl: 6 }}
                            component={Link}
                            to={sub.path}
                          >
                            <ListItemText primary={sub.name} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default TopHeader;
