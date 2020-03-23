import React from 'react';
import { Switch ,Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
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
        </Switch>
    );
}

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  