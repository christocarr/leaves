import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import productContext from "../context/productContext";

function Home() {
  const productsData = useContext(productContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  return (
    <>
      <Header />
      <ProductCard.Group>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductCard.Title>{product.name}</ProductCard.Title>
            <ProductCard.Description>{product.desc}</ProductCard.Description>
          </ProductCard>
        ))}
      </ProductCard.Group>
    </>
  );
}

export default Home;
