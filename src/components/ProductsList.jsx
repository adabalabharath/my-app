import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

const ProductsList = ({
  title,
  category,
  image,
  description,
  price,
  rating,
  count,
  onClick,
  isSelected,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        m: 2,
         border: {
          xs: "none",  // No border on small screens
          sm: isSelected ? "2px solid violet" : "none", // Border on larger screens
        },
        transition:"transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={onClick}
    >
      <Grid container alignItems="center">
        <Grid item xs={4} p={2} sx={{ position: "relative" }}>
          <CardMedia component="img" image={image} alt={title} />
          <Chip
            icon={<Rating size="small" value={1} max={1} color="primary" />}
            label={`${rating} (${count})`} // Display rating number
            variant="outlined"
            size="small"
            sx={{ position: "absolute", bottom: 20, backgroundColor: "white" }}
          />
        </Grid>

        <Grid item xs={8}>
          <CardContent sx={{ direction: "column" }}>
            <Typography variant="subtitle1" color="secondary">
              {category}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2, // Clamp the text to 2 lines
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1, // Clamp the text to 1 lines
                color: "text.secondary",
              }}
            >
              {description}
            </Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              ${price}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductsList;
