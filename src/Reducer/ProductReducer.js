import products from '../Data/products';

const SORT = 'SORT';

export const initialProductState = {
	products: products,
	sortBy: null,
	brandName: null,
	size: null,
};

export function productReducer(state, { type, payload }) {
	switch (type) {
		case SORT:
			return { ...state, sortBy: payload };
		case 'TOGGLE_BRAND':
			return { ...state, brandName: payload };
		default:
			return state;
	}
}
