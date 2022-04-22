import { configureStore } from '@reduxjs/toolkit';

import navSlice from './reducers/navSlice';
import formSlice from './reducers/formSlice';
import paletteReducer from './reducers/paletteReducer';

export const store = configureStore({
  reducer: {
    navSlice: navSlice,
    formSlice: formSlice,
    paletteReducer: paletteReducer,
  },
});
