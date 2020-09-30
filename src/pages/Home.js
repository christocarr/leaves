import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { productData } from "../productData";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <>
      <Header />
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductCard.Title>{product.name}</ProductCard.Title>
          <ProductCard.Description>{product.desc}</ProductCard.Description>
        </ProductCard>
      ))}
    </>
  );
}

export default Home;
