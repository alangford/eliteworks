/**
 * Created by beebe on 6/9/2017.
 */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import getProducts from "./reducers/GetProduct"
import createProduct from "./reducers/CreateProduct"
import thunk from 'redux-thunk';

export default createStore(combineReducers({
    getProducts,
    createProduct
}), applyMiddleware(
    thunk
));