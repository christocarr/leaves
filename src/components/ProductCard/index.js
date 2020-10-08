import React from 'react';
import { Group, Card, Title, Description, Price } from './styles';

function ProductCard({ children, ...restProps }) {
	return <Card>{children}</Card>;
}

ProductCard.Group = function ProductCardGroup({ children, ...restProps }) {
	return <Group>{children}</Group>;
};

ProductCard.Title = function ProductTitle({ children, ...restProps }) {
	return <Title>{children}</Title>;
};

ProductCard.Description = function ProductDesctiption({
	children,
	...restProps
}) {
	return <Description>{children}</Description>;
};

ProductCard.Price = function ProductPrice({ children, ...restProps }) {
	return <Price>{children}</Price>;
};

export default ProductCard;
