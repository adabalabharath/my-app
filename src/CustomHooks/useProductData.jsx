import { useState, useEffect } from "react";
import axios from "axios";

const useProductData = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return product;
};

export default useProductData;
