import React, { useState } from "react";
import renderer from 'react-test-renderer';
import { loginSuccess } from '../../redux/userSlice';
import MainPeep from "./MainPeep";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

jest.mock("axios");
jest.mock("react-redux");
jest.mock("../TimelinePeep/TimelinePeep");



const renderTree = tree => renderer.create(tree);

describe('<MainPeep>', () => {
  useState(loginSuccess);

  xit('should render component', async () => {
    expect(await renderTree(<MainPeep
    />).toJSON()).toMatchSnapshot();
  });

});