import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Nav from '../nav/Nav';
import Router1 from '../router_content/Router1';
import Router2 from '../router_content/Router2';
import RouterMain from '../router_content/RouterMain';



export default class RouterApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RouterMain/>
                    </Route>
                    <Route path="/router1">
                        <Router1 />
                    </Route>
                    <Route path="/router2">
                        <Router2 />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
