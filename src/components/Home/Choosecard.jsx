import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";


export default function ChooseCard({ title, description, imageUrl }) {
  return (
    <Card
      className="card12"
      sx={{ mt:{
        xs: 4,
        sm: 6,
        md: 8,
      },
        maxWidth: 345,
        textAlign: "center",
        justifyContent:'center',
        p: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Outline shadow only
        borderRadius: 2, // Slightly rounded corners
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
        },
      }}
    >
      <CardActionArea>
        {/* Centered Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <CardMedia style={{ marginLeft: '-200px' }}
            component="img"
            sx={{
              height: 80, // Adjust height as needed
              width: 80, // Adjust width as needed
              objectFit: "contain",
            }}
            image={imageUrl}
            alt={title}
          />
        </Box>

        {/* Card Content */}
        <CardContent>
          <Typography textAlign={'left'} gutterBottom variant="h6" sx={{ fontSize: "medium", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography textAlign={'left'} variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <br />
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
