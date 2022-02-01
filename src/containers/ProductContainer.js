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

const ProductContainer = () => {

    const { sku } = useParams();
    const isEdit = useMatch('/products/:sku/edit');
    const isDelete = useMatch('/products/:sku/del');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector((state) => getProductBySku(state, sku));

    const handleSubmit = values => {
        const { sku } = values;
        return dispatch(updateProduct('sku', sku, values)).then(() => {}, (error) => {
            if (error) {
                const errors = {
                    sku: error.toString()
                };
                throw new SubmissionError(errors);
            }
        });
    }

    const handleSubmitSuccess = () => {
        navigate(-1);
    }

    const handleBack = () => {
        navigate(-1);
    }

    const handleDelete = () => {
        console.log("HANDLE DELETE");
        dispatch(deleteProduct('sku', sku)).then(
            navigate(-1)
        );
    }

    useEffect(() => {
        if(!product) {
            dispatch(fetchProducts());
        }
    }, [product])

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