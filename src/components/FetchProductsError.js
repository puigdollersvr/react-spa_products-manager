import React from 'react';

/*
 * THE FETCH PRODUCTS ERROR
 * PRESENTATIONAL COMPONENT
 */
const FetchProductsError = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-red-500 py-8">Ups, algo no ha ido bien...</h2>
            <p className="font-bold text-gray-500">Hubo un error al intentar obtener los productos.</p>
        </div>
    );
};

export default FetchProductsError;