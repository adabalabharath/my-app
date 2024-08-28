import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailViewEmpty from "./DetailViewEmpty";
import ProductsList from "./ProductsList";

const MasterView = () => {
  const [data, setData] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleProductClick = (id) => {
    setSelectedProductId(id);
    if (window.innerWidth < 750) {
      navigate(`/products/${id}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={{
          height: "100vh",
          overflowY: "auto", // Scrollbar will appear for the products section
        }}
      >
        {data.map((product) => (
          <ProductsList
            key={product.id}
            productId={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            rating={product.rating.rate}
            count={product.rating.count}
            isSelected={selectedProductId === product.id}
            onClick={() => handleProductClick(product.id)} // Handle click event
          />
        ))}
      </Grid>
      {!selectedProductId ? (
        <Grid item xs={12} md={8}>
          <DetailViewEmpty />
        </Grid>
      ) : (
        <Grid item xs={12} md={8}>
          <ProductDetail productId={selectedProductId} />
          {/* Pass selected product ID */}
        </Grid>
      )}
    </Grid>
  );
};

export default MasterView;
