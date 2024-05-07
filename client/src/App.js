// import logo from './logo.svg';

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

