import React, { Component } from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export class MenuBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper container">
          <p>ハゲるぞ</p>
        </div>
      </div>
    );
  }
}

export class NumberPad extends Component {
  render() {
    return (
      <div className="container">
        <div className="button">1</div>
        <div className="button">2</div>
        <div className="button">3</div>
        <div className="button">4</div>
        <div className="button">5</div>
        <div className="button">6</div>
        <div className="button">7</div>
        <div className="button">8</div>
        <div className="button">9</div>
        <div className="button">delete</div>
      </div>
    );
  }
}
