import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

test("renders the home page without errors", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
