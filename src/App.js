import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      
        <div>
          <Header />
          <main className="container">
          {/* <Movies /> */}
          </main>
        </div>
    );
  }
}

export default App;
