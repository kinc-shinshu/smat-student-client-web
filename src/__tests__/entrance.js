import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  NumberButton,
  RoomNumberInput,
  MenuBar,
  NumberPad
} from "../components/ui";
import { Entrance } from "../pages/entrance";

Enzyme.configure({ adapter: new Adapter() });

describe("view", () => {
  it("renders 1 menubar", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("MenuBar").length).toBe(1);
  });
  it("renders 1 room number input bar", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("RoomNumberInput").length).toBe(1);
  });
  it("renders 1 number pad", () => {
    const wrapper = shallow(<Entrance />);
    expect(wrapper.find("NumberPad").length).toBe(1);
  });
  it("renders 10 number input buttons", () => {
    const wrapper = shallow(<NumberPad />);
    expect(wrapper.find("div.button").length).toBe(10);
  });
});

describe("logic", () => {
  // ぜんぜんわからん
  it("unappropriate input to room id", () => {
    const wrapper = mount(<Entrance />);
    wrapper
      .find("input#roomId")
      .first()
      .simulate("change", { target: { value: "111" } });
    expect(wrapper.find("div#roomId-error").text()).toBe(
      "部屋番号を入力してください。"
    );
  });
});
