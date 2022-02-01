import { UPDATE_PRODUCT } from "../constants";
import { createAction } from "redux-actions";
import { apiPut } from "../api";
import { urlProducts } from "../api/urls";

export const updateProduct = createAction(UPDATE_PRODUCT,
    (searchKey, searchValue, product) => apiPut(urlProducts, searchKey, searchValue, product)() );