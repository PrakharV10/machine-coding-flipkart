export function getSortedData(products, sortBy) {
	console.log(sortBy);
	if (sortBy && sortBy === 'HIGH_TO_LOW') {
		return products.sort((a, b) => b.price - a.price);
	} else if (sortBy && sortBy === 'LOW_TO_HIGH') {
		return products.sort((a, b) => a.price - b.price);
	} else return products;
}

export function getFilteredData(products, brandName, size) {
	return products
		.filter((product) => product.brand === brandName)
		.filter((product) => {
			if (product.sizes.find((one) => one === size)) return true;
			return false;
		});
}
