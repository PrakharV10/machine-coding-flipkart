import React, { useEffect, useState } from 'react';
import { useProducts } from '../../Context/product-context';

function Sidebar() {
	const [brands, setBrands] = useState([]);
	const { productState, productDispatch } = useProducts();

	function getBrands(products) {
		const brands = products.reduce((acc, curr) => {
			acc.push(curr.brand);
			return acc;
		}, []);

		return brands;
	}

	function brandClickHandler(brand) {
		if (productState.brandName.find((one) => one === brand))
			productDispatch({ type: 'REMOVE_BRAND', payload: brand });
		else productDispatch({ type: 'ADD_BRAND', payload: brand });
	}

	function sizeClickHandler(size) {
		if (productState.size.find((one) => one === size))
			productDispatch({ type: 'REMOVE_SIZE', payload: size });
		else productDispatch({ type: 'ADD_SIZE', payload: size });
	}

	function genderClickHandler(gender) {
		if (productState.gender.find((one) => one === gender))
			productDispatch({ type: 'REMOVE_GENDER', payload: gender });
		else productDispatch({ type: 'ADD_GENDER', payload: gender });
	}

	useEffect(() => {
		setBrands(getBrands(productState.products));
	}, []);

	return (
		<>
			<div className='w-72 hidden md:block bg-white shadow h-full'>
				<div className='font-regular mt-2 p-4 flex justify-between items-center'>
					<span>Filters</span>
					<span
						onClick={() => productDispatch({ type: 'RESET_STATE' })}
						className='text-red-500 text-xs font-medium cursor-pointer'
					>
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
								onChange={() =>
									productDispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
								}
								className='mr-3'
								id='radio-1'
								type='radio'
								name='radio'
								checked={productState.sortBy === 'HIGH_TO_LOW'}
							/>
							<span>High to Low</span>
						</label>
						<label
							className='flex items-center text-sm cursor-pointer opacity-70 mb-2'
							htmlFor='radio-2'
						>
							<input
								onChange={() =>
									productDispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
								}
								className='mr-3'
								id='radio-2'
								type='radio'
								name='radio'
								checked={productState.sortBy === 'LOW_TO_HIGH'}
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
									<input
										onChange={() => brandClickHandler(brand)}
										id={brand}
										type='checkbox'
										checked={
											productState.brandName.find((one) => one === brand)
												? true
												: false
										}
									/>
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
						{['SM', 'MD', 'LG', 'XL'].map((size, index) => {
							return (
								<li key={index} className='flex items-center mb-2'>
									<input
										onChange={() => sizeClickHandler(size)}
										id={size}
										type='checkbox'
										checked={
											productState.size.find((one) => one === size)
												? true
												: false
										}
									/>
									<label
										htmlFor={size}
										className='ml-3 text-sm cursor-pointer opacity-70'
									>
										{size}
									</label>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='border-t-2 border-gray-200 py-2 p-4'>
					<div className='text-sm font-medium'>IDEAL FOR</div>
					<ul className='mt-3'>
						{['Men', 'Women'].map((gender, index) => {
							return (
								<li key={index} className='flex items-center mb-2'>
									<input
										onChange={() => genderClickHandler(gender)}
										id={gender}
										type='checkbox'
										checked={
											productState.gender.find((one) => one === gender)
												? true
												: false
										}
									/>
									<label
										htmlFor={gender}
										className='ml-3 text-sm cursor-pointer opacity-70'
									>
										{gender}
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
