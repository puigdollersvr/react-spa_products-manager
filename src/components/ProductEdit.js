import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import ProductsActions from './ProductsActions';

const isRequired = value => (
    !value && "Requerido"
);

const isNumber = value => (
    isNaN(Number(value)) && "Campo numérico"
);

const renderField = ({input, meta, type, label, name, withFocus}) => (
    <div className='flex flex-row justify-center py-2'>
        <div>
            <label className='block text-gray-700 text-sm font-bold w-24 text-left self-center' htmlFor={name}>{label}:</label>
            {
                meta.touched && meta.error && <span className='block text-xs text-red-500 text-left'>{meta.error}</span>
            }
        </div>
        <input className='shadow appearance-none border rounded py-2 w-80 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...input} type={!type ? "text" : type }
        ref={withFocus} />
    </div>
);

const validate = values => {
    const error = {};

    if(!values.name) {
        error.name = "El campo nombre es requerido";
    }
    if(!values.sku) {
        error.sku = "El SKU es un campo requerido";
    }

    return error;
}

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const positiveNumber = (value, previousValue) => (value >= 0 ? value : previousValue);
const activeSubmitClasses = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2";
const disabledSubmitClasses = "bg-green-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed mx-2";

const ProductEdit = ({ handleSubmit, submitting, onBack, pristine }) => {

    const inputFocus = useRef(null);
    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <div className='px-8'>
            <h2 className="text-xl font-bold text-gray-500 py-8">Datos del producto</h2>
            <form onSubmit={handleSubmit}>
                <Field
                    withFocus={inputFocus}
                    name="sku" 
                    component={renderField} 
                    type="text"
                    validate={isRequired}
                    label="SKU"
                    parse={toUpper}
                ></Field>
                <Field 
                    name="name" 
                    component={renderField} 
                    type="text"
                    validate={isRequired}
                    label="Nombre"
                ></Field>
                <Field 
                    name="description" 
                    component={renderField} 
                    type="text"
                    validate={isRequired}
                    label="Descripción"
                ></Field>
                <Field 
                    name="category" 
                    component={renderField} 
                    type="text"
                    validate={isRequired}
                    label="Categoría"
                ></Field>
                <Field 
                    name="price" 
                    component={renderField} 
                    type="number"
                    validate={[isRequired, isNumber]}
                    label="Precio"
                    parse={toNumber}
                    normalize={positiveNumber}
                ></Field>
                <ProductsActions>
                    <button className={pristine || submitting ? disabledSubmitClasses : activeSubmitClasses} type="submit" disabled={pristine || submitting}>
                        Guardar
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2" type="button" disabled={submitting} onClick={onBack}>
                        Cancelar
                    </button>
                </ProductsActions>
            </form>
        </div>
    );
};

ProductEdit.propTypes = {
    onBack: PropTypes.func.isRequired,
};

const ProductEditForm = reduxForm(
    {
        form: 'ProductEdit',
        validate
    }
)(ProductEdit);

export default setPropsAsInitial(ProductEditForm);