import React from "react";
import renderer from 'react-test-renderer';
import Explore from "./Explore";

jest.mock("react-redux");
jest.mock("../../components/LeftSidebar/LeftSidebar");
jest.mock("../../components/RightSidebar/RightSidebar");
jest.mock("../../components/Signin/Signin");

const renderTree = tree => renderer.create(tree);
describe('<Explore>', () => {
  it('should render component', () => {
    expect(renderTree(<Explore
    />).toJSON()).toMatchSnapshot();
  });

});