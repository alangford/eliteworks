
import React, { Component } from "react";
import axios from "axios";
import { handleProductName, handleProductDescription, handleProductImage } from "../../reducers/CreateProduct"
import {connect} from 'react-redux';
import './create-styles.css'


class Create extends Component {
    render(){
        const postProduct = () =>{ //this makes the post call to post the product
            if(this.props.name.length > 2 && this.props.description.length > 2 && this.props.image.length > 2){
                axios.post(`http://challenge.eliteworks.com/product/set?api_key=a.b.l.2142@gmail.com
                &&name=${this.props.name}
                &&description=${this.props.description}
                &&data=${this.props.image}`).then((res)=>{
                    this.props.history.push('/') //this redirects you to the home page
                })
            }
            else alert('You need at least three characters in the name, description and image')
        };
        return (
            <div className="create">
                <h1>Create a new product here</h1>
                <p>Name: {this.props.name}</p>
                <p>Description: {this.props.description}</p>
                <p>Image: </p> <img className="create-image" src={this.props.image} alt=" " />
                    <div className="create-input">
                        <input
                            placeholder="Name"
                            onChange={(e)=> this.props.handleProductName(e)}
                            value={this.props.name}
                            className="create-input"
                        />

                        <input
                            placeholder="Description"
                            onChange={(e)=> this.props.handleProductDescription(e)}
                            value={this.props.description}
                            className="create-input"
                        />
                        <input
                            placeholder="Image-url"
                            onChange={(e)=> this.props.handleProductImage(e)}
                            value={this.props.image}
                            className="create-input"
                        />
                        <button
                            onClick={postProduct.bind(this)}
                            className="create-button"
                        >Submit</button>
                    </div>
            </div>
        )
    }
}
export default connect(state => ({ // this connects the store to the state
    name: state.createProduct.nameText,
    description: state.createProduct.descriptionText,
    image: state.createProduct.imageText
}), {
    handleProductName, handleProductDescription, handleProductImage
})(Create);