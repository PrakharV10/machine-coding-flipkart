import products from '../Data/products';

const SORT = 'SORT';
const ADD_BRAND = 'ADD_BRAND';
const REMOVE_BRAND = 'REMOVE_BRAND';
const ADD_SIZE = 'ADD_SIZE';
const REMOVE_SIZE = 'REMOVE_SIZE';
const RESET_STATE = 'RESET_STATE';

export const initialProductState = {
	products: products,
	sortBy: null,
	brandName: [],
	size: [],
};

export function productReducer(state, { type, payload }) {
	switch (type) {
		case SORT:
			return { ...state, sortBy: payload };
		case ADD_BRAND:
			return { ...state, brandName: [...state.brandName, payload] };
		case REMOVE_BRAND:
			return { ...state, brandName: state.brandName.filter((brand) => brand !== payload) };
		case ADD_SIZE:
			return { ...state, size: [...state.size, payload] };
		case REMOVE_SIZE:
			return { ...state, size: state.size.filter((one) => one !== payload) };
		case RESET_STATE:
			return initialProductState;
		default:
			return state;
	}
}
