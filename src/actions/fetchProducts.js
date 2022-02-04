import { FETCH_PRODUCTS } from "../constants";
import { createAction } from "redux-actions";
import { apiGet } from "../api";
import { urlProducts } from "../api/urls";

/*
 * CREATE THE FETCH_PRODUCTS ACTION
 * USING "REDUX-ACTIONS" LIB.
 */
export const fetchProducts = createAction(FETCH_PRODUCTS, apiGet(urlProducts));