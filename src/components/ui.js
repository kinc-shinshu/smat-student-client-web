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

export class NumberButton extends Component {
  render() {
    return (
      <div>
        <button>n</button>
      </div>
    );
  }
}

export class RoomNumberInput extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            value={null}
            onChange={null}
          />
          <label for="title">部屋番号</label>
        </div>
      </div>
    );
  }
}
