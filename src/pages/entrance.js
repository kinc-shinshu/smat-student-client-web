import React, { Component, createContext } from "react";
import { MenuBar, RoomNumberInput, NumberPad } from "../components/ui";

export const { Provider, Consumer } = createContext();

export class Entrance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: "",
      setRoomId: n => {
        this.setState({ roomId: this.state.roomId + n });
      },
      deleteRoomId: n => {
        this.setState({ roomId: "" });
      }
    };
  }

  render() {
    return (
      <div className="App">
        <MenuBar />
        <RoomNumberInput value={this.state.roomId} />
        <Provider value={this.state}>
          <NumberPad />
        </Provider>
      </div>
    );
  }
}
