/**
 * Created by beebe on 6/9/2017.
 */
import React, { Component } from "react"
import { Link } from "react-router-dom"
import {connect} from 'react-redux';

//this component only displays when you navigate to a path that doesn't exist.
class PageNotFound extends Component {
    render(){
        return (
            <div>
                <h1>404 Page Not Found</h1>
                <h1>Click <Link to="/">Here</Link> to go back home until next time.</h1>
            </div>
        )
    }
}
export default connect(state => ({
}), {

})(PageNotFound);