import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

const ProductsList = ({ products, urlPath }) => {
    return (
        <div>
            <div className="products-list">
            {
                products.map( p =>
                    <ProductListItem
                        key={p.sku}
                        name={p.name}
                        sku={p.sku}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </ProductListItem>
                )
            }   
            </div>
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default ProductsList;