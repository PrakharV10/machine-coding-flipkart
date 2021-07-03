import React from 'react';

function Card({ product }) {
	return (
		<div className='w-48 h-80 mt-0 ml-0 cursor-pointer shadow-sm transition-shadow duration-300 ease-in-out rounded-sm hover:shadow-lg md:w-64 md:h-96 md:m-4 md:ml-0 md:mt-0'>
			<div className='h-40 md:h-60 w-full overflow-hidden object-contain'>
				<img src={product.image} alt='product-display' />
			</div>
			<div className='font-medium text-sm mt-2 mx-2 opacity-50'>{product.brand}</div>
			<div className='font-light text-sm mt-2 mx-2'>{product.name}</div>
			<div className='flex text-sm mt-2 mx-2'>
				<span className='mr-2 font-medium'>Rs.{product.price}</span>
				<span className='mr-2 font-light line-through'>Rs.{product.actualPrice}</span>
				<span className='mr-2 font-medium text-green-600'>{product.discount}% Off</span>
			</div>
			<div className='flex mt-2 mx-2'>
				{product.sizes.map((size, index) => {
					return (
						<span
							key={index}
							className='rounded-full w-9 h-9 flex items-center justify-center text-xs font-medium mr-2 bg-gray-300 border-2 border-white transition-all hover:border-blue-500'
						>
							{size}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default Card;
