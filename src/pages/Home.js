import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';
import ProductCard from '../components/ProductCard';
import productContext from '../context/productContext';

function Home() {
	const productsData = useContext(productContext);
	const [searchResults, setSearchResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortSelect, setSortSelect] = useState('popularity');
	const [sortedData, setSortedData] = useState([]);

	useEffect(() => {
		setSortedData(productsData.sort((a, b) => a.popularity > b.popularity ? 1 : -1))
	}, [productsData])

	useEffect(() => {
		// const lowToHighPriceSort = productsData.sort((a, b) => {
		// 	return a.price > b.price ? 1 : -1;
		// });

		setSearchResults(sortedData.filter(({ name }) =>
			name.toLowerCase().includes(searchTerm.toLowerCase())
		));

	}, [searchTerm, sortedData]);

	return (
		<>
			<Header />
			<Sort sortSelect={sortSelect} setSortSelect={setSortSelect} />
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
