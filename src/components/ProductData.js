import React from 'react';
import PropTypes from 'prop-types';
import ProductsActions from './ProductsActions';

/*
 * THE SHOW SINGLE PRODUCT DATA
 * PRESENTATIONAL COMPONENT
 */
const ProductData = ( { 
        name, sku, price, description, category, stock, onBack, isDeleteAllow, onDelete 
    } ) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-500 py-8">Ficha de producto</h2>
            <div className="product-data flex flex-col flex-row items-center">
                    <div className='py-1 flex flex-row'>
                        <strong className='pr-2'>SKU: </strong>
                        {sku}
                    </div>
                    <div className='py-1 flex flex-row'>
                        <strong className='pr-2'>Nombre: </strong>
                        {name}
                    </div>
                    <div className='py-1 flex flex-row'>
                        <strong className='pr-2'>Descripción: </strong>
                        {description}
                    </div>
                    <div className='py-1 flex flex-row'>
                        <strong className='pr-2'>Categoría: </strong>
                        {category}
                    </div>
                    <div className='py-1 flex flex-row'>
                        <strong className='pr-2'>Price: </strong>
                        {price}
                    </div>
                    <div className='py-1 flex flex-row'>
                        <strong className='pr-2'>Stock: </strong>
                        {stock}
                    </div>
            </div>
            <ProductsActions>
                <button className="field mx-2 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded" onClick={onBack}>Volver</button>
                {isDeleteAllow && <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={onDelete}>Eliminar</button> }
            </ProductsActions>
        </div>
    );
};

//Validate necessary props
ProductData.propTypes = {
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default ProductData;