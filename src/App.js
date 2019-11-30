import React, { Component } from "react";
import Games from "./components/games";
import Header from "./components/header";
import Search from "./components/search";
import NotFound from "./components/notFound";
import { Route, Switch } from "react-router-dom";
import "./App.css"

class App extends Component {
  render() {
    return (
        <div className="appclass">
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
