import React from "react";
import renderer from 'react-test-renderer';
import TimelinePeep from "./TimelinePeep";

jest.mock("axios");
jest.mock("../Peep/Peep");

const renderTree = tree => renderer.create(tree);
describe('<TimelinePeep>', () => {
  it('2. should render component', () => {
    expect(renderTree(<TimelinePeep
    />).toJSON()).toMatchSnapshot();
  });

});