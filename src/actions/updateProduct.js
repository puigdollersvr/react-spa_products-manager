import { UPDATE_PRODUCT } from "../constants";
import { createAction } from "redux-actions";
import { apiPut } from "../api";
import { urlProducts } from "../api/urls";

/*
 * CREATE THE UPDATE_PRODUCT ACTION
 * USING "REDUX-ACTIONS" LIB.
 */
export const updateProduct = createAction(UPDATE_PRODUCT,
    (id, product) => apiPut(urlProducts, id, product)() );