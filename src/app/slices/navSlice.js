import { createSlice } from '@reduxjs/toolkit';

// /. imports

const navSlice = createSlice({
  name: 'navSlice',
  initialState: {
    navLinks: [
      {
        id: 1,
        text: 'Form',
        link: '/DepositFM-Task/',
        isActive: true,
      },
      {
        id: 2,
        text: 'Palette',
        link: 'Palette',
        isActive: false,
      },
    ],
    isFormPage: true,
  },
  reducers: {
    setNavLinkActiveStatus(state, action) {
      const { id, status } = action.payload;
      state.navLinks.map(item => {
        if (item.id === id) {
          return item.isActive = status;
        } else {
          return item.isActive = false;
        }
      });
    },
    setFormPageStatus(state, action) {
      state.isFormPage = action.payload;
    },
  },
});

export const {
  setNavLinkActiveStatus,
  setFormPageStatus,
} = navSlice.actions;


export default navSlice.reducer;
