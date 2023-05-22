import renderer from 'react-test-renderer';

import App from "./App";

jest.mock("react-router-dom");
jest.mock("./App.css");
jest.mock("./Components/Navbar/Navbar");
jest.mock("./pages/Error/Error");
jest.mock("./pages/Home/Home");

const renderTree = tree => renderer.create(tree);
describe('<App>', () => {
  it('should render component', () => {
    expect(renderTree(<App
    />).toJSON()).toMatchSnapshot();
  });

});