import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import productContext from "../context/productContext";

function Home() {
  const productsData = useContext(productContext);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredProducts = productsData.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [productsData, searchTerm]);

  return (
    <>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductCard.Group>
        {searchResults.map((product) => (
          <ProductCard key={product.id}>
            <ProductCard.Title>{product.name}</ProductCard.Title>
            <ProductCard.Description>{product.desc}</ProductCard.Description>
            <ProductCard.Price>£{product.price}</ProductCard.Price>
          </ProductCard>
        ))}
      </ProductCard.Group>
    </>
  );
}

export default Home;
