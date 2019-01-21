import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Entrance } from "./pages/entrance";
import { Questions } from "./pages/questions";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Entrance} />
          <Route exact path="/questions" component={Questions} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
