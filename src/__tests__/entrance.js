import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NumberButton, RoomNumberInput, MenuBar } from "../components/ui";
import { Entrance } from "../pages/entrance";

Enzyme.configure({ adapter: new Adapter() });

describe("view", () => {
  it("renders 1 menubar", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("MenuBar").length).toBe(1);
  });
  it("renders 10 number input buttons", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("NumberButton").length).toBe(10);
  });
  it("renders 1 room number input bar", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("RoomNumberInput").length).toBe(1);
  });
});

describe("logic", () => {
  // ぜんぜんわからん
});
