import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo
        rem? Sint itaque praesentium, id molestiae assumenda perspiciatis
        consectetur repellat.
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          Cornelius Iiro
        </span>
        <span style={{ color: "#7B89A8" }}> - CEO of Intellicode</span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
    </Box>
  );
};

export default Testimonial;
