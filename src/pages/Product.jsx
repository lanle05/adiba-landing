import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import Phero from "../components/Product/Phero";
import Features from "../components/Product/Features";

const Product = () => {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    document.body.classList.add("product-page");
    return () => {
      document.body.classList.remove("product-page");
    };
  }, []);

  if (!product) {
    return (
      <div
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          paddingTop: "8rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Phero product={product} />
      <Features product={product} />
    </>
  );
};

export default Product;
