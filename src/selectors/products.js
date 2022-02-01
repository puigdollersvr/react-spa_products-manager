import  { createSelector } from "reselect";

export const getProducts = state => state.products;

export const getProductBySku = createSelector(
    (state, sku) => state.products.find( p => p.sku === sku),
    product => product
);