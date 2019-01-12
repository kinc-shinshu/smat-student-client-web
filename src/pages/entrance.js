import React, { Component } from "react";
import { MenuBar, NumberPad } from "../components/ui";

export class Entrance extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <NumberPad />
      </div>
    );
  }
}
