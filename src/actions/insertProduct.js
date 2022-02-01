import { INSERT_PRODUCT } from "../constants";
import { createAction } from "redux-actions";
import { apiPost } from "../api";
import { urlProducts } from "../api/urls";

export const insertProduct = createAction(INSERT_PRODUCT,
    product => apiPost(urlProducts, product)() );