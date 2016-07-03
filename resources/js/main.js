import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Clients from "./components/clients/Clients";
import Errors from "./components/errors/Errors";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Clients}></IndexRoute>
            <Route path="/clients" component={Clients}></Route>
            <Route path="/errors" component={Errors}></Route>
        </Route>
    </Router>,
app);
