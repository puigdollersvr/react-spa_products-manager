import { DELETE_PRODUCT } from "../constants";
import { createAction } from "redux-actions";
import { apiDelete } from "../api";
import { urlProducts } from "../api/urls";

/*
 * CREATE THE DELETE_PRODUCT ACTION
 * USING "REDUX-ACTIONS" LIB.
 */
export const deleteProduct = createAction(DELETE_PRODUCT,
    (id) => apiDelete(urlProducts, id)() );