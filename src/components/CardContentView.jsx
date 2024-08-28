import { Grid, CardContent, Typography, Rating } from "@mui/material";
import React from "react";

const CardContentView = ({ product }) => {
  const ratingValue = product?.rating?.rate ?? 0;
  return (
    <CardContent>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="subtitle1" color="secondary">
            {product?.category}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{product?.title}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Clamp the text to 3 lines
            }}
          >
            {product?.description}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Rating value={ratingValue} size="small" readOnly />
            </Grid>
            <Grid item>
              <Typography variant="body2">{product?.rating?.rate}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {product?.rating?.count} reviews
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            ${product?.price}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default CardContentView;
