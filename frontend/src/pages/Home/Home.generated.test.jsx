import React from "react";
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import userMockData from '../../mockUsersData.json';
import { store } from '../../redux/store';
import Home from "./Home";

jest.mock("react-redux");
jest.mock("../../Components/LeftSidebar/LeftSidebar");
jest.mock("../../Components/MainPeep/MainPeep");
jest.mock("../../Components/RightSidebar/RightSidebar");
jest.mock("../../Components/TimelinePeep/TimelinePeep");
jest.mock("../../Components/Signin/Signin");

const renderTree = tree => renderer.create(tree);

// Signin().handleLogin(userMockData.users[0])

describe('<Home>', () => {

  xit('should render component', () => {

    expect(renderTree(<MemoryRouter store={store}><Home currentUser={userMockData.users[0]}
    /></MemoryRouter>).toJSON()).toMatchSnapshot();
  });

});