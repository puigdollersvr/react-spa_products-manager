import { DELETE_PRODUCT } from "../constants";
import { createAction } from "redux-actions";
import { apiDelete } from "../api";
import { urlProducts } from "../api/urls";

export const deleteProduct = createAction(DELETE_PRODUCT,
    (searchKey, searchValue) => apiDelete(urlProducts, searchKey, searchValue)() );