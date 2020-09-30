import React from "react";
import { Card, Title, Description } from "./styles";

function ProductCard({ children, ...restProps }) {
  return <Card>{children}</Card>;
}

ProductCard.Title = function ProductTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

ProductCard.Description = function ProductDesctiption({
  children,
  ...restProps
}) {
  return <Description>{children}</Description>;
};

export default ProductCard;
