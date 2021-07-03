import React, { useState } from 'react';
import ProductList from './Components/ProductList/ProductList';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import products from './Data/products';

function App() {
	const [product, setProduct] = useState(products);
	return (
		<div className='App w-screen bg-white'>
			<Navbar />
			<main className='w-screen flex mb-4'>
				<Sidebar setProduct={setProduct} />
				<ProductList product={product} setProduct={setProduct} />
			</main>
		</div>
	);
}

export default App;
