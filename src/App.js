import React, { Component } from "react";
import Games from "./components/games";
import Header from "./components/header";
import Search from "./components/search";
import NotFound from "./components/notFound";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import Timer from "./components/timer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/games" component={Games} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
