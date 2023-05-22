import React from "react";
import renderer from 'react-test-renderer';
import Signin from "./Signin";

jest.mock("axios");
jest.mock("react-redux");
jest.mock("../../redux/userSlice");
jest.mock("react-router-dom");

const renderTree = tree => renderer.create(tree);
describe('<Signin>', () => {
  it('should render component', () => {
    expect(renderTree(<Signin
    />).toJSON()).toMatchSnapshot();
  });

});