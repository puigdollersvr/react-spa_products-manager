import { combineReducers } from "redux";
import { products } from "./products";
import { reducer as reduxForm } from "redux-form";

/*
 * Combine all reducers 
 */
export default combineReducers({
    products,
    form: reduxForm
});