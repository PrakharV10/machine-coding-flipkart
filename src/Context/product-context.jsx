import React, { createContext, useContext, useReducer } from 'react';
import { initialProductState, productReducer } from '../Reducer/ProductReducer';

const ProductContext = createContext();

export function ProductProvider({ children }) {
	const [productState, productDispatch] = useReducer(productReducer, initialProductState);
	return (
		<ProductContext.Provider value={{ productState, productDispatch }}>
			{children}
		</ProductContext.Provider>
	);
}

export function useProducts() {
	return useContext(ProductContext);
}
