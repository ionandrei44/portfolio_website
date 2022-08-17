import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";

const Experience = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="experience">
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Let's take a look at what I've{" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>built</span> so far
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            img={project.image}
          />
        ))}
      </Box>

      <Stack />
    </Box>
  );
};

export default Experience;
