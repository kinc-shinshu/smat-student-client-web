import React, { Component } from "react";
import { MenuBar, RoomNumberInput, NumberPad } from "../components/ui";

export class Entrance extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <RoomNumberInput />
        <NumberPad />
      </div>
    );
  }
}
