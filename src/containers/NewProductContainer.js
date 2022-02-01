import React from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import ProductEdit from '../components/ProductEdit';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { insertProduct } from '../actions/insertProduct';
import { SubmissionError } from 'redux-form';

const NewProductContainer = props => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = values => {
        return dispatch(insertProduct(values)).then(() => {}, (error) => {
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
        
    const handleOnBack = () => {
        navigate(-1);
    }

    const renderBody = () => {
        return <ProductEdit onSubmit={handleSubmit}
                    onSubmitSuccess={handleSubmitSuccess}
                    onBack={handleOnBack} />
    }

    return (
        <div>
            <AppFrame header={"Nuevo producto"}
                body={renderBody()}
            ></AppFrame>
        </div>
    );
};

NewProductContainer.propTypes = {
    
};

export default NewProductContainer;