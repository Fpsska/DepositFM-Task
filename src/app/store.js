import { configureStore } from '@reduxjs/toolkit';

import navReducer from './reducers/navReducer';
import formSlice from './reducers/formSlice';
import paletteReducer from './reducers/paletteReducer';

export const store = configureStore({
  reducer: {
    navReducer: navReducer,
    formSlice: formSlice,
    paletteReducer: paletteReducer,
  },
});
