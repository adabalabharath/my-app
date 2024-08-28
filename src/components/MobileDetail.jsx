import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardContentView from "./CardContentView";
import useProductData from "../CustomHooks/useProductData";

const MobileDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const product = useProductData(params.id);
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "95vh",
        m: 2,
        position: "relative",
      }}
    >
      <CardActions
        sx={{
          position: "absolute",
          boxShadow: 3,
          borderRadius: "50%",
          left: 5,
          top: 5,
        }}
      >
        <IconButton onClick={handleBackClick} size="small">
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      </CardActions>
      <CardMedia
        component="img"
        image={product?.image}
        alt={product?.title}
        sx={{ height: 300, objectFit: "contain" }}
      />
      <CardContentView product={product} />
    </Card>
  );
};

export default MobileDetail;
