import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Provider} from 'react-redux'
import createStore from './store'
import TopNav from "./Components/TopNav/TopNav";
import Home from "./Components/Home/Home";
import Create from "./Components/Create/Create"
import PageNotFound from "./Components/PageNotFound"

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore}>
            <Router>
                  <div className="App">
                      <TopNav/>
                        <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/create" component={Create} />
                        <Route path="*" component={PageNotFound}/>
                        </Switch>
                  </div>
            </Router>
        </Provider>
    );
  }
}

