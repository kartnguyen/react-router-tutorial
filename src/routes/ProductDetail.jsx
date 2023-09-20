import React from "react";
import { useAppcontext } from "../hooks/useAppcontext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  const { findProductById } = useAppcontext();

  const product = findProductById(productId);

  return (
    <>
      <h1>Product Detail Page</h1>
      <div>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
      </div>
    </>
  );
};

export default ProductDetail;
