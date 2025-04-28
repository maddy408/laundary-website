import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from "@mui/material/Box";

export default function Workcard({ title, description, imageUrl }) {
  return (
    <Card
      className="workcard"
      sx={{
        maxWidth: 345,
        textAlign: "center",
        backgroundColor: "transparent", 
        boxShadow: "none", 
        borderRadius: 0, 
      }}
    >
      <CardActionArea>
        {/* Centered Small Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <CardMedia
            component="img"
            sx={{
              height: 60,
              width: 60, 
              objectFit: "contain", 
            }}
            image={imageUrl}
            alt={title}
          />
        </Box>

        {/* Card Content */}
        <CardContent>
          <Typography
            textAlign={'center'}
            gutterBottom
            variant="h6"
            sx={{ fontSize: "medium", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography textAlign={'center'} variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
