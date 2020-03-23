import React from 'react';
import { Switch ,Route } from "react-router-dom";
import Login from './pages/login';
import Logout from './pages/logout';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/logout">
                <Logout />
            </Route>
        </Switch>
    );
}

  