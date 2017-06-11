/**
 * Created by beebe on 6/9/2017.
 */
import axios from 'axios';

const GETPRODUCTS = 'GETPRODUCTS'; // setting this as a const means less errors and makes it immutable

const initialState = { // this initializes the state
    Products: []
};

export default (state = initialState, action) => { // this receives the dispatches from the lower function calls and sets the state.
    switch (action.type){
        case GETPRODUCTS:
            return Object.assign({}, state, {Products: [action.Products]});
        default:
            return state;
    }
};

export function getProducts() { //this dispatches when the home component mounts to make a call to get all products
    return dispatch =>{
        axios.get(`http://challenge.eliteworks.com/product?api_key=a.b.l.2142@gmail.com`).then((res)=>{
            dispatch( {
                type: GETPRODUCTS,
                Products: res.data.data,
            })
        })
    }
}
