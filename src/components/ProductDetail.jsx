import { Card, CardActions, CardMedia} from "@mui/material";
import React from "react";
import CardContentView from "./CardContentView";
import useProductData from "../CustomHooks/useProductData";

const ProductDetail = ({ productId }) => {
  const product = useProductData(productId);
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", height: "95vh", m: 2}}
    >
      <CardActions></CardActions>
      <CardMedia
        component="img"
        image={product?.image}
        alt={product?.title}
        sx={{ height: 400, objectFit: "contain" }}
      />
      <CardContentView product={product} />
    </Card>
  );
};

export default ProductDetail;
