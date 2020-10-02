import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import productContext from "../context/productContext";

function Home() {
  const productsData = useContext(productContext);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredProducts = productsData.filter(({name}) =>
      name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredProducts);
  }, [productsData, searchTerm]);

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value.toLowerCase());
  };

  return (
    <>
      <Header />
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ProductCard.Group>
        {searchResults.map((product) => (
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
