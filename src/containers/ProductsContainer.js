import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppFrame from '../components/AppFrame';
import ProductsList from '../components/ProductsList';
import ProductsActions from '../components/ProductsActions';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../actions/fetchProducts';
import { getProducts } from '../selectors/products';

const ProductsContainer = props => {
    
    //REDUX Hooks: https://thoughtbot.com/blog/using-redux-with-react-hooks
    const products = useSelector(state => getProducts(state));
    const dispatch = useDispatch();

    useEffect(() => {
        if(!products || products.length === 0 ) {
            dispatch(fetchProducts());
        }
    }, [products])

    let navigate = useNavigate();

    function handleAddNew() {
        navigate("/products/new");
    }

    const renderBody = products => (
        <div>
            <ProductsList
                products={products}
                urlPath='/products/'>
            </ProductsList>
            <ProductsActions>

                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleAddNew}>Nuevo Producto</button>

            </ProductsActions>
        </div>
    )

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