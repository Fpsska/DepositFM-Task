import { configureStore } from '@reduxjs/toolkit';

import navSlice from './slices/navSlice';
import formSlice from './slices/formSlice';
import paletteSlice from './slices/paletteSlice';

// /. imports

export const store = configureStore({
  reducer: {
    navSlice: navSlice,
    formSlice: formSlice,
    paletteSlice: paletteSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;