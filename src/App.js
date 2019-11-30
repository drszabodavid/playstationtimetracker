import React, { Component } from "react";
import Games from "./components/games";
import Header from "./components/header";
import Search from "./components/search";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/games" component={Games} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
