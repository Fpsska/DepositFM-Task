import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import navSlice from './app/slices/navSlice';
import formSlice from './app/slices/formSlice';
import paletteSlice from './app/slices/paletteSlice';

// /. imports

const render = (
    ui,
    { preloadedState, store = configureStore({ reducer: { navSlice, formSlice, paletteSlice }, preloadedState }),
        ...renderOptions } = {}
) => {

    function Wrapper({ children }) {
        return (
            <BrowserRouter>
                <Provider store={store}>{children}</Provider>
            </BrowserRouter>
        );
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };