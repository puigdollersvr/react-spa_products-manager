import { combineReducers } from "redux";
import { products } from "./products";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
    products,
    form: reduxForm
});