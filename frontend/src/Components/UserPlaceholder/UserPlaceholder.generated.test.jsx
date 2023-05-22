import { createMemoryHistory } from '@remix-run/router';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import UserPlaceholder from "./UserPlaceholder";

jest.mock("axios");
jest.mock("react-router-dom");

const renderTree = tree => renderer.create(tree);
describe('<UserPlaceholder>', () => {
  it('should render component', () => {
    const history = createMemoryHistory();
    const route = `/users/find/`
    history.push(route);

    expect(renderTree(<MemoryRouter history={history}><UserPlaceholder
    /></MemoryRouter >).toJSON()).toMatchSnapshot();
  });

});