import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NumberButton, RoomNumberInput, MenuBar } from "../components/ui";

Enzyme.configure({ adapter: new Adapter() });

describe("view", () => {
  test("renders 10 number buttons", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("NumberButton").length).toBe(10);
  });

  test("renders 1 room number input", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("RoomNumberInput").length).toBe(1);
  });

  test("renders 1 menubar", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("MenuBar").length).toBe(1);
  });
});

describe("logic", () => {
  // ぜんぜんわからん
});
