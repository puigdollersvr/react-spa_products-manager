import { FETCH_PRODUCTS } from "../constants";
import { createAction } from "redux-actions";
import { apiGet } from "../api";
import { urlProducts } from "../api/urls";

/*const products = [
    {
        "sku": "0001",
        "name": "Product 1",
        "price": 10,
    },
    {
        "sku": "0002",
        "name": "Product 2",
        "price": 15,
    },
    {
        "sku": "0003",
        "name": "Product 3",
        "price": 20,
];*/
//export const fetchProducts = createAction(FETCH_PRODUCTS, () => products);

export const fetchProducts = createAction(FETCH_PRODUCTS, apiGet(urlProducts));