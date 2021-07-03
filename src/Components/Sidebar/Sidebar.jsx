import React, { useEffect, useState } from 'react';
import { useProducts } from '../../Context/product-context';

function Sidebar() {
	const [brands, setBrands] = useState([]);
	const { productState, productDispatch } = useProducts();

	function getBrands(products) {
		let brands = products.reduce((acc, curr) => {
			acc.push(curr.brand);
			return acc;
		}, []);

		return brands;
	}

	useEffect(() => {
		setBrands(getBrands(productState.products));
	}, []);

	return (
		<>
			<div className='w-72 hidden md:block bg-white shadow h-full'>
				<div className='font-regular mt-2 p-4 flex justify-between items-center'>
					<span>Filters</span>
					<span className='text-red-500 text-xs font-medium cursor-pointer'>
						CLEAR ALL
					</span>
				</div>

				<div className='border-t-2 border-gray-200 py-2 p-4'>
					<div className='text-sm font-medium'>PRICE RANGE</div>
					<div className='mt-3 flex flex-col'>
						<label
							className='flex items-center text-sm cursor-pointer opacity-70 mb-2'
							htmlFor='radio-1'
						>
							<input
								onClick={() =>
									productDispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
								}
								className='mr-3'
								id='radio-1'
								type='radio'
								name='radio'
							/>
							<span>High to Low</span>
						</label>
						<label
							className='flex items-center text-sm cursor-pointer opacity-70 mb-2'
							htmlFor='radio-2'
						>
							<input
								onClick={() =>
									productDispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
								}
								className='mr-3'
								id='radio-2'
								type='radio'
								name='radio'
							/>
							Low to High
						</label>
					</div>
				</div>

				<div className='border-t-2 border-gray-200 py-2 p-4'>
					<div className='text-sm font-medium'>BRANDS</div>
					<ul className='mt-3'>
						{brands.map((brand, index) => {
							return (
								<li key={index} className='flex items-center mb-2'>
									<input id={brand} type='checkbox' />
									<label
										htmlFor={brand}
										className='ml-3 text-sm cursor-pointer opacity-70'
									>
										{brand}
									</label>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='border-t-2 border-gray-200 py-2 p-4'>
					<div className='text-sm font-medium'>SIZES</div>
					<ul className='mt-3'>
						{['SM', 'MD', 'LG', 'XL'].map((brand, index) => {
							return (
								<li key={index} className='flex items-center mb-2'>
									<input id={brand} type='checkbox' />
									<label
										htmlFor={brand}
										className='ml-3 text-sm cursor-pointer opacity-70'
									>
										{brand}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
