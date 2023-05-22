import { render } from '@testing-library/react';
import { BrowserRouter as RouterProvider } from "react-router-dom";
import Navbar from './Navbar.jsx';

describe('Navbar tests', () => {
    it(`1. Navbar should matches snapshot`, () => {
        const view = render(<RouterProvider><Navbar /></RouterProvider>);

        expect(view).toMatchSnapshot();
    });
})