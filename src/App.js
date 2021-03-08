import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";
import Home from "./compoments/home";
import Login from "./compoments/login";
import Signup from "./compoments/signup";
import Todos from "./compoments/todos";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/todo" component={Todos}></Route>
      </Switch>
    );
  }
}

export default App;
