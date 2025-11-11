import React from "react";
import { Box } from "@mui/material";

const BackgroundEffect = () => {
  return (
    <Box
      className="background-effect"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "calc(-60px + 60 * (100vw - 320px) / 1600)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: -1,
      }}
    >
     
      <Box
        className="main-circle"
        sx={{
          width: "calc(1040px + 640 * (100vw - 320px) / 1600)",
          height: "calc(1040px + 640 * (100vw - 320px) / 1600)",
          borderRadius: "50%",
          opacity: 0.5,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(
            0deg,
            hsl(27, 12%, 15%) 0%,
            hsl(26, 14%, 15%) 10%,
            hsl(26, 15%, 15%) 20%,
            hsl(26, 17%, 16%) 30%,
            hsl(26, 18%, 16%) 40%,
            hsl(26, 20%, 16%) 50%,
            hsl(26, 21%, 16%) 60%,
            hsl(26, 23%, 17%) 70%,
            hsl(26, 24%, 17%) 80%,
            hsl(26, 26%, 17%) 90%,
            hsl(26, 27%, 18%) 100%
          )`,
          "&::before": {
            content: '""',
            background:
              "linear-gradient(to top, transparent 90%, rgba(255,255,255,0.05) 100%)",
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: "50%",
            border: "1px dashed #5d4837",
          },
        }}
      >
  
        <Box
          className="main-circle circle-1"
          sx={{
            width: "calc(880px + 560 * (100vw - 320px) / 1600)",
            height: "calc(880px + 560 * (100vw - 320px) / 1600)",
            borderRadius: "50%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
              content: '""',
              background:
                "linear-gradient(to top, transparent 90%, rgba(255,255,255,0.05) 100%)",
              width: "100%",
              height: "100%",
              position: "absolute",
              borderRadius: "50%",
              border: "1px dashed #5d4837",
            },
          }}
        >
    
          <Box
            className="main-circle circle-2"
            sx={{
              width: "calc(720px + 480 * (100vw - 320px) / 1600)",
              height: "calc(720px + 480 * (100vw - 320px) / 1600)",
              borderRadius: "50%",
              position: "relative",
              backgroundImage:
          "linear-gradient(0deg, hsl(27, 12%, 15%) 0%, hsl(26, 14%, 15%) 10%, hsl(26, 15%, 15%) 20%, hsl(26, 17%, 16%) 30%, hsl(26, 18%, 16%) 40%, hsl(26, 20%, 16%) 50%, hsl(26, 21%, 16%) 60%, hsl(26, 23%, 17%) 70%, hsl(26, 24%, 17%) 80%, hsl(26, 26%, 17%) 90%, hsl(26, 27%, 18%) 100%)",
              opacity: 1,
              "&::after": {
                content: '""',
                width: "100%",
                height: "97%",
                background:
                  "linear-gradient(to right, #f2a93e, #f07054)",
                borderRadius: "50%",
                
                filter: "blur(7px)",
                position: "absolute",
                top: "10px",
                left: 0,
                zIndex: -1,
                animation: "rotateCircles 10s linear infinite",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = `
@keyframes rotateCircles {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;


if (typeof document !== "undefined" && !document.getElementById("circle-style")) {
  const style = document.createElement("style");
  style.id = "circle-style";
  style.innerHTML = styles;
  document.head.appendChild(style);
}

export default BackgroundEffect;
