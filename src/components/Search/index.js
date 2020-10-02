import React from "react";
import { Container, Input } from "./styles";

function Search({ searchTerm, setSearchTerm, children, ...restProps }) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </Container>
  );
}

export default Search;
