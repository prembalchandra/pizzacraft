import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Typography,
  Button,
  Breadcrumbs,
  Link,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CommonHeroSection = ({
  title,
  subtitle,
  bgImage,
  height = "80vh",
  gradient = "linear-gradient(135deg, rgba(34, 10, 84, 0.85) 0%, rgba(0,0,0,0.6) 100%)",
  overlayOpacity = 0.9,
  cta = null,
  align = "center",
  breadcrumbs = [],
}) => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        textAlign: align,
        color: "#fff",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          transform: "scale(1.02)",
          filter: "brightness(0.9)",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: gradient,
          opacity: overlayOpacity,
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, md: 0 },
          textAlign: align,
        }}
      >
        {title && (
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.1,
              color: "#fff",
              textShadow: "0 4px 14px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mx: align === "center" ? "auto" : 0,
              mb: 3,
              color: "rgba(255,255,255,0.95)",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: "#fff" }} />}
            aria-label="breadcrumb"
            sx={{
              display: "inline-flex",
              mb: 3,
              justifyContent: align === "center" ? "center" : "flex-start",
              "& a": {
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { color: "#fff" },
              },
              "& p": {
                color: "#fff",
                fontWeight: 600,
              },
            }}
          >
            {breadcrumbs.map((crumb, index) =>
              index === breadcrumbs.length - 1 ? (
                <Typography key={index} variant="body2">
                  {crumb.label}
                </Typography>
              ) : (
                <Link key={index} href={crumb.href || "#"}>
                  {crumb.label}
                </Link>
              )
            )}
          </Breadcrumbs>
        )}

        {cta && (
          <Button
            variant="contained"
            onClick={cta.onClick}
            sx={{
              backgroundColor: "#053F44",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              boxShadow: "0 6px 18px rgba(5,63,68,0.4)",
              "&:hover": {
                backgroundColor: "#042F33",
              },
            }}
          >
            {cta.label}
          </Button>
        )}
      </Container>
    </Box>
  );
};

CommonHeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  gradient: PropTypes.string,
  overlayOpacity: PropTypes.number,
  cta: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  align: PropTypes.oneOf(["center", "left", "right"]),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
};

export default CommonHeroSection;
