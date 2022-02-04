import React from 'react';
import AppFrame from '../components/AppFrame';
import ProductEdit from '../components/ProductEdit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertProduct } from '../actions/insertProduct';
import { SubmissionError } from 'redux-form';

/*
 * THE PRODUCT'S CONNECTED COMPONENT
 * FOR CREATE NEW PRODUCT DATA
 * PRESENTATIONAL COMPONENT
 */
const NewProductContainer = props => {

    //Declare navigate and dispatch hooks.
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Handle submit and create product.
    const handleSubmit = values => {
        return dispatch(insertProduct(values)).then(() => {}, (error) => {
            if (error) {
                const errors = {
                    error: error.toString()
                };
                throw new SubmissionError(errors);
            }
        });
    }

    //Go back if submit succeeded.
    const handleSubmitSuccess = () => {
        navigate(-1);
    }
       
    //Handle back button click and go back.
    const handleOnBack = () => {
        navigate(-1);
    }

    //Render body.
    const renderBody = () => {
        return <ProductEdit onSubmit={handleSubmit}
                    onSubmitSuccess={handleSubmitSuccess}
                    onBack={handleOnBack} />
    }

    //Render APP.
    return (
        <div>
            <AppFrame header={"Nuevo producto"}
                body={renderBody()}
            ></AppFrame>
        </div>
    );
};

export default NewProductContainer;