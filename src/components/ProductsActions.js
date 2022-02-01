import React from 'react';
import PropTypes from 'prop-types';

const ProductsActions = ({ children }) => {
    return (
        <div>
            <div className="product-actions my-8">
                <div>{children}</div>
            </div>
        </div>
    );
};

ProductsActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductsActions;