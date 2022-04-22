import { configureStore } from '@reduxjs/toolkit';

import navSlice from './reducers/navSlice';
import formSlice from './reducers/formSlice';
import paletteSlice from './reducers/paletteSlice';

export const store = configureStore({
  reducer: {
    navSlice: navSlice,
    formSlice: formSlice,
    paletteSlice: paletteSlice,
  },
});
