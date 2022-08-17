import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import React from "react";

const Project = ({ title, description, tags, img }) => {
  return (
    <Card sx={{ maxWidth: 375, margin: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            mx: "auto",
            mb: 3,
          }}
        >
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="contained"
          >
            Source Code
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="contained"
          >
            Live Version
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip label={tag} variant="outlined" key={tag} />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Project;
