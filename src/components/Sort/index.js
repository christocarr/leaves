import React from 'react';
import { Container, Select } from './styles';

function Sort({ sortSelect, setSortSelect, children, ...restProps }) {
	return (
		<Container>
			<Select
				value={sortSelect}
				onChange={({ target }) => setSortSelect(target.value)}
			>
        {/* set default sort to most popular */}
				<option value="popularity">Sort by: Popularity</option>
				<option value="priceLowToHigh">Sort by: Price (low to high)</option>
			</Select>
		</Container>
	);
}

export default Sort;
