import { handleActions } from "redux-actions";
import { DELETE_PRODUCT, FETCH_PRODUCTS, INSERT_PRODUCT, UPDATE_PRODUCT } from "../constants";

/*
 * Create the products reducers 
 */
export const products = handleActions({
    [FETCH_PRODUCTS]: (state, action) => [...action.payload.products],
    [INSERT_PRODUCT]: (state, action) => [...state, action.payload],
    [UPDATE_PRODUCT]: (state, action) => {
        const productPayload = action.payload;
        const { _id } = productPayload;
        const products = state;
        const initialValue = [];
        const newProducts = products.reduce( (acc, product) => {
            if( product._id === _id ) {
                return [ ...acc, productPayload];
            } else {
                return [ ...acc, product];
            }
        }, initialValue);
        
        return newProducts;
    },
    [DELETE_PRODUCT]: (state, action) => state.filter(p => p._id !== action.payload),
}, []);
