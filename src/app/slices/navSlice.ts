import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { navLinksTypes } from '../../Types/navSliceTypes';

// /. imports

interface navSliceTypes {
  navLinks: navLinksTypes[];
  isFormPage: Boolean;
}

interface setNavLinkActiveStatusTypes {
  id: number;
  status: boolean;
}

// /. interfaces

const initialState: navSliceTypes = {
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
};

// /. initialState

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setNavLinkActiveStatus(state, action: PayloadAction<setNavLinkActiveStatusTypes>) {
      const { id, status } = action.payload;
      state.navLinks.map(item => {
        if (item.id === id) {
          return item.isActive = status;
        } else {
          return item.isActive = false;
        }
      });
    },
    setFormPageStatus(state, action: PayloadAction<boolean>) {
      state.isFormPage = action.payload;
    },
  },
});

export const {
  setNavLinkActiveStatus,
  setFormPageStatus,
} = navSlice.actions;


export default navSlice.reducer;
