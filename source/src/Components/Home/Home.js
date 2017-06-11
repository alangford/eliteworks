/**
 * Created by beebe on 6/9/2017.
 */
/**
 * Created by beebe on 6/9/2017.
 */
import React, { Component } from "react"
import {connect} from 'react-redux';
import { getProducts } from "../../reducers/GetProduct"
import Product from "./subcomponents/Product";
import "./home-styles.css"

class Home extends Component {
    componentWillMount(){
        this.props.getProducts()//this makes a call to get the products from the getproduct reducer
    }
    render(){
        const Products = this.props.products.map((val, i)=>{ //this is used if there are more then one product
              return <Product //this is a subcomponent that will distplay the product information
                    key={i}
                    name={val.product.name}
                    description={val.product.description}
                    image={val.product.data}
                    />
          });
        return (
            <div className="home">
                {Products}
            </div>
        )
    }
}
export default connect( state=>({//this connects this component to state
    products: state.getProducts.Products
}), {
    getProducts
})(Home)