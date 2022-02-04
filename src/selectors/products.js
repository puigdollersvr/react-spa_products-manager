/*
 * PRODUCTS SELECTORS 
 */

import  { createSelector } from "reselect";

//Get products from state.
export const getProducts = state => state.products;

//Find product by SKU
export const getProductBySku = createSelector(
    (state, sku) => state.products.find( p => p.sku === sku),
    product => product
);