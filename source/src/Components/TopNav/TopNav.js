/**
 * Created by beebe on 6/9/2017.
 */
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./top-nav-styles.css"

export default class TopNav extends Component { // this component is used as a nav bar to navigate to different pages
    render() {
        return (
            <div className="top-nav">
                <span className="top-nav-span">
                    <Link to="/" className="top-nav-link">View Products</Link>
                    <Link to="/create" className="top-nav-link">Create Product</Link>
                </span>
            </div>
        )
    }
}