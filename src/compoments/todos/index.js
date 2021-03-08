import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import List from "./list";
import Create from "./create";
import Update from "./update";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: true,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    sessionStorage.clear();
    this.setState({ redirect: false });
  }
  render() {
    const { redirect } = this.state;
    if (!redirect) {
      return <Redirect to="/" />;
    }
    return (
      <BrowserRouter>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <button type="button" onClick={this.logout}>
              Logout
            </button>
          </li>
        </ul>
        <div>
          <div className="container mainContent">
            <Switch>
              <Route exact path="/todo" component={List} />
              <Route exact path="/todo/create" component={Create} />
              <Route exact path="/todo/update/:id" component={Update} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Todo;
