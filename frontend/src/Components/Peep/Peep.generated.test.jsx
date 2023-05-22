import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import mockPeepsData from "../../mockPeepsData.json";
import Peep from "./Peep";

jest.mock("axios");
jest.mock("date-fns/formatDistance");
jest.mock("react-router-dom");


const renderTree = tree => renderer.create(tree);
describe('<Peep>', () => {
  it('should render component', () => {
    expect(renderTree(<MemoryRouter><Peep peep={mockPeepsData}
    /></MemoryRouter>).toJSON()).toMatchSnapshot();
  });

});