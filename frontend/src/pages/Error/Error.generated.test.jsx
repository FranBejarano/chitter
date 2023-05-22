import React from "react";
import renderer from 'react-test-renderer';
import Error from "./Error";

jest.mock("react-router-dom");

const renderTree = tree => renderer.create(tree);
describe('<Error>', () => {
  it('should render component', () => {
    expect(renderTree(<Error
    />).toJSON()).toMatchSnapshot();
  });

});