import React from 'react';
import PropTypes from 'prop-types';

/*
 * THE SHOW SINGLE PRODUCT DATA ACTIONS
 * (BUTTONS) PRESENTATIONAL COMPONENT
 */
const ProductsActions = ({ children }) => {
    return (
        <div>
            <div className="product-actions my-8">
                <div>{children}</div>
            </div>
        </div>
    );
};

//Validate necessary props
ProductsActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductsActions;