import React from "react";
import { Typography, Grid } from "@mui/material";

const DetailViewEmpty = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h6" color="secondary">
          Nothing to display...
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Select an item to display</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="text.secondary">
          Select an item from master view to view in detail view
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DetailViewEmpty;
