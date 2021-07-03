export function getSortedData(products, sortBy) {
	if (sortBy && sortBy === 'HIGH_TO_LOW') {
		return products.sort((a, b) => b.price - a.price);
	} else if (sortBy && sortBy === 'LOW_TO_HIGH') {
		return products.sort((a, b) => a.price - b.price);
	} else return products;
}

export function getFilteredBrands(products, brandName) {
	if (brandName.length === 0) return products;

	return products.filter((product) => {
		if (brandName.find((one) => one === product.brand)) return true;
		return false;
	});
}

export function getFilteredSize(products, size) {
	if (size.length === 0) return products;

	return products.filter((product) => {
		if (product.sizes.find((one) => one === size[size.length - 1])) return true;
		return false;
	});
}
