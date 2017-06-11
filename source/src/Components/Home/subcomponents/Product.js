import React, { Component } from "react"
import "../home-styles.css"
export default class Product extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img className="image" src={this.props.image} alt=" " />
                <p>{this.props.description}</p>
            </div>
        )
    }
}