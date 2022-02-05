import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppFrame from '../components/AppFrame';
import ProductsList from '../components/ProductsList';
import ProductsActions from '../components/ProductsActions';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../actions/fetchProducts';
import { getProducts } from '../selectors/products';
import FetchProductsError from '../components/FetchProductsError';

/*
 * THE PRODUCTS LIST CONNECTED COMPONENT
 * FOR PRODUCTS LIST
 * PRESENTATIONAL COMPONENT
 */
const ProductsContainer = props => {
    
    //Get products.
    const products = useSelector(state => getProducts(state));

    //Check products length.
    const emptyProducts = products.length > 0;
    
    //Declare the hook useDispatch and use navigate.
    const dispatch = useDispatch();
    let navigate = useNavigate();

    //If there's no products in the state, get them.
    useEffect(() => {
        if(!products || products.length === 0 ) {
            dispatch(fetchProducts())
        }
    }, [products])

    //Handle add new product button click and navigate to new product page.
    function handleAddNew() {
        navigate("/products/new");
    }

    //Render body.
    const renderBody = products => (
        emptyProducts ?
        <div>
            <ProductsList
                products={products}
                urlPath='/products/'>
            </ProductsList>
            <ProductsActions>

                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleAddNew}>Nuevo Producto</button>

            </ProductsActions>
        </div> :
        <FetchProductsError />
    )

    //Render APP.
    return (
        <div>
            <AppFrame 
                header={'Listado de productos'}
                body={renderBody(products)}
            ></AppFrame>
        </div>
    );
};

export default ProductsContainer;