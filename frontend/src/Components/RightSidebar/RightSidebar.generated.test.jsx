import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import RightSidebar from "./RightSidebar";

jest.mock("react-redux");
jest.mock("react-router-dom");
jest.mock("../../redux/userSlice");
jest.mock("../Signin/Signin");

const renderTree = tree => renderer.create(tree);
describe('<RightSidebar>', () => {
  it('should render component', () => {
    expect(renderTree(<MemoryRouter><RightSidebar
    /></MemoryRouter>).toJSON()).toMatchSnapshot();
  });

});