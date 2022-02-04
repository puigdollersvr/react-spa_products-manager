import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import ProductsActions from './ProductsActions';

//Build and render a form field.
const renderField = ({input, meta, type, label, name, withFocus}) => (
    <div className='flex flex-row justify-center py-2'>
        <div>
            <label className='block text-gray-700 text-sm font-bold w-24 text-left self-center' htmlFor={name}>{label}</label>
            {
                meta.touched && meta.error && <span className='block text-xs text-red-500 text-left'>{meta.error}</span>
            }
        </div>
        <input className='shadow appearance-none border rounded py-2 w-80 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...input} type={!type ? "text" : type }
        ref={withFocus} />
    </div>
);

//Render a drop down list.
const renderDropDownField = ({input, children, meta, label, name, withFocus}) => (
    <div className='flex flex-row justify-center py-2'>
        <div>
            <label className='block text-gray-700 text-sm font-bold w-24 text-left self-center' htmlFor={name}>{label}</label>
            {
                meta.touched && meta.error && <span className='block text-xs text-red-500 text-left'>{meta.error}</span>
            }
        </div>
        <select
            className='shadow appearance-none border rounded py-2 w-80 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...input}
            ref={withFocus} 
        >
            {children}
        </select>
    </div>
);


//Global form validations (only applied if there's no validation in the field).
const validate = values => {
    const error = {};

    //Validation for SKU
    if(!values.sku) {
        error.sku = "Requerido";
    }

    //Validation for name
    if(!values.name) {
        error.name = "Requerido";
    }

    //Validation for description
    if(!values.description) {
        error.description = "Requerido";
    }

    //Validation for category
    if(!values.category) {
        error.category = "Requerido";
    }

    //Validation for price
    if(!values.price) {
        error.description = "Requerido";
    }

    return error;
}


//Is field empty validation
const isRequired = value => (
    !value && "Requerido"
);
//Is field filled with a number validation
const isNumber = value => (
    isNaN(Number(value)) && "Campo numérico"
);
//Positive value validation.
const positiveNumber = (value, previousValue) => (value >= 0 ? value : previousValue);


//Transform the given value to a number.
const toNumber = value => value && Number(value);
//Transform the given value to an UpperCase string.
const toUpper = value => value && value.toUpperCase();


//Prepare the submit button set of tailwind classes depending on it's state.
const activeSubmitClasses = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2";
const disabledSubmitClasses = "bg-green-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed mx-2";

/*
 * THE EDIT PRODUCT 
 * PRESENTATIONAL COMPONENT
 */
const ProductEdit = ({ handleSubmit, submitting, onBack, pristine }) => {

    //Get input focus.
    const inputFocus = useRef(null);
    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    //Render edit product page using redux-forms.
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
                    component={renderDropDownField}
                    validate={isRequired}
                    label="Categoría"
                >
                    <option value="Bedroom">Bedroom</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Home Office">Home Office</option>
                </Field>
                <Field 
                    name="price" 
                    component={renderField} 
                    type="number"
                    validate={[isRequired, isNumber]}
                    label="Precio"
                    parse={toNumber}
                    normalize={positiveNumber}
                ></Field>
                <Field 
                    name="error" 
                    component={renderField} 
                    type="hidden"
                    label=""
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

//Validate needed props.
ProductEdit.propTypes = {
    onBack: PropTypes.func.isRequired,
};

//Set redux-form.
const ProductEditForm = reduxForm(
    {
        form: 'ProductEdit',
        validate
    }
)(ProductEdit);

export default setPropsAsInitial(ProductEditForm);