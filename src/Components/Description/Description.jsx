import React from 'react';
import products from '../../Data/products';
import Card from '../Card/Card';

function Description() {
	return (
		<div className='w-screen flex-1 mx-2 md:ml-2 md:mr-0'>
			<div className='h-20 mb-4 flex justify-between items-center p-2 font-medium bg-white'>
				<span>Clothing And Accessories</span>
			</div>
			<div className='flex flex-wrap justify-between md:justify-start'>
				{products.map((product) => {
					return (
						<div key={product.id}>
							<Card product={product} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Description;
