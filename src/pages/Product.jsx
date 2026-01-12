import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import Phero from "../components/Product/Phero";

const Product = () => {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <>
    <Phero/>
    </>
  );
};

export default Product;
