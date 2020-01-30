import React from 'react'
import Clients from './Clients/index'
import Dashboard from './Dashboard/index'
import Login from './Login/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Clients} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}