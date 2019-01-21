import React, { Component } from "react";
import { Consumer } from "../pages/entrance";
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
    const buttonStyle = {
      textAlign: "center",
      color: "#090",
      fontSize: "2em",
      margin: "0.2em",
      padding: "0.2em",
      border: "solid",
      borderRadius: "1.1em"
    };
    return (
      <div className="container row">
        <Consumer>
          {({ setRoomId, deleteRoomId }) => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const buttons = numbers.map((k, i) => (
              <div className="col s4">
                <div
                  className="button"
                  key={i}
                  style={buttonStyle}
                  onClick={() => {
                    setRoomId(k);
                  }}
                >
                  {k}
                </div>
              </div>
            ));
            return (
              <div>
                {buttons}
                <div className="col s4">
                  <div
                    className="button"
                    style={buttonStyle}
                    onClick={() => {
                      deleteRoomId();
                    }}
                  >
                    D
                  </div>
                </div>
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}

export class RoomNumberInput extends Component {
  render() {
    return (
      <div className="input-field">
        <input type="text" value={this.props.value} />
        <label htmlFor="first_name">部屋番号</label>
      </div>
    );
  }
}
