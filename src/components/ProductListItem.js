import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * THE LIST OF PRODUCTS PRODUCT 
 * PRESENTATIONAL COMPONENT
 */
const ProductListItem = ({ name, editAction, delAction, urlPath, sku }) => {
    return (
        <div>
            <div className="products-list-item flex flex-row py-8 border-b border-b-gray-200">
                <div className="field font-bold text-gray-500 hover:text-black basis-3/4 justify-start self-center text-left px-8">
                    <Link to={`${urlPath}${sku}`}>{name}</Link>
                </div>
                <div className="buttons flex flex-row basis-1/4 justify-end items-center px-8">
                    <div>
                        <Link 
                            className="field mx-2 bg-white hover:bg-sky-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded" 
                            to={`${urlPath}${sku}/edit`}
                        >
                            {editAction}
                        </Link>
                    </div>
                    <div>
                        <Link 
                            className="field mx-2 bg-white hover:bg-red-200 text-gray-800 font-semibold py-2 px-4 border border-gary-200 rounded" 
                            to={`${urlPath}${sku}/del`}
                        >
                            {delAction}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

//Validate the necessary props.
ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired
};

export default ProductListItem;