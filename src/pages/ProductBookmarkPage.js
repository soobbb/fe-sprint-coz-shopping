import React, { useState, useEffect } from "react";
import ProductBookmarkList from "../components/ProductBookmarkList";
import axios from "axios";

function ProductBookmarkPage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?", {
        params: {
          count: 4,
        },
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, []);
  return (
    <>
      <ProductBookmarkList product={product} />
    </>
  );
}
export default ProductBookmarkPage;
