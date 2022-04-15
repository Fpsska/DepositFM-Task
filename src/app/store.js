import { configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers/navReducer';
import formReducer from './reducers/formReducer';

export const store = configureStore({
  reducer: {
    navReducer: navReducer,
    formReducer: formReducer,
  },
});
