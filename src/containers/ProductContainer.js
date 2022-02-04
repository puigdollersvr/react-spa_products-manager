import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { getProductBySku } from '../selectors/products';
import ProductEdit from '../components/ProductEdit';
import ProductData from '../components/ProductData';
import { fetchProducts } from '../actions/fetchProducts';
import { updateProduct } from '../actions/updateProduct';
import { SubmissionError } from 'redux-form';
import { deleteProduct } from '../actions/deleteProduct';

/*
 * THE PRODUCT'S CONNECTED COMPONENT
 * FOR EDIT, SHOW AND REMOVE PRODUCT DATA
 * PRESENTATIONAL COMPONENTS
 */
const ProductContainer = () => {

    //Get SKU from params.
    const { sku } = useParams();

    //Define if is edit or delete based on URL.
    const isEdit = useMatch('/products/:sku/edit');
    const isDelete = useMatch('/products/:sku/del');

    //Declare navigate and dispatch hooks.
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Get product from state by its SKU.
    const product = useSelector((state) => getProductBySku(state, sku));

    //Handle submit and update product.
    const handleSubmit = values => {
        const { _id } = values;
        return dispatch(updateProduct(_id, values)).then(() => {}, (error) => {
            if (error) {
                const errors = {
                    sku: error.toString()
                };
                throw new SubmissionError(errors);
            }
        });
    }

    //Go back if submit succeeded
    const handleSubmitSuccess = () => {
        navigate(-1);
    }

    //Handle back button click and go back.
    const handleBack = () => {
        navigate(-1);
    }

    //Handle delete button click and remove product, then go back.
    const handleDelete = () => {
        const { _id } = product;
        if(_id){
            dispatch(deleteProduct(_id)).then(
                navigate(-1)
            );
        }
    }

    //Fetch products if there's no product in the state.
    useEffect(() => {
        if(!product) {
            dispatch(fetchProducts());
        }
    }, [product])

    //Manage which presentational component should be rendered.
    const renderBody = () => {
        if (product) {
            const ProductControl = isEdit ? ProductEdit : ProductData;
            return <ProductControl {...product} 
                        onSubmit={handleSubmit}
                        onSubmitSuccess={handleSubmitSuccess}
                        onBack={handleBack}
                        isDeleteAllow={!!isDelete}
                        onDelete={handleDelete}
                    />
        } 
    }

    //Render APP
    return (
        <div>
            <AppFrame 
                header={`Producto ${sku}`}
                body={renderBody()}
            >   
            </AppFrame>
        </div>
    );
    
};

export default ProductContainer;