import React, { Component } from "react";
import { MenuBar, RoomNumberInput, NumberPad } from "../components/ui";

export class Entrance extends Component {
  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const buttons = numbers.map((n, i) => <NumberButton key={i} />);
    return (
      <div>
        <MenuBar />
        <RoomNumberInput />
        <NumberPad />
      </div>
    );
  }
}
