
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Servicemulticard = ({ title, description, imageUrl }) => {
  return (
     <Card className="card" sx={{ maxWidth: 345, position: "relative", borderRadius: 2, overflow: "hidden" }}>
          <CardActionArea>
            {/* Background Image */}
            <CardMedia
              component="div"
              sx={{
                height: '100%', // Adjust height as needed
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.9, 
             
              }}
            >
              {/* Overlay Content */}
              <CardContent
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor:' rgba(0, 0, 0, 0.5)', /* Dark overlay */
                  // Adjust opacity
                  // backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for readability
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            </CardMedia>
          </CardActionArea>
        </Card>
  );
};

export default Servicemulticard;
