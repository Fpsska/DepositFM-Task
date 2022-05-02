import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { formInputsTypes } from '../../Types/formSliceTypes';

// /. imports

interface formSliceTypes {
    isImageSelected: boolean,
    isFormSubmited: boolean,
    currentImageURL: string,
    currentResponseInfo: any, // { id: number, message: string, status: string }[]
    currentRequestInfo: any,
    formInputs: formInputsTypes[]
}

// /. interfaces

const initialState: formSliceTypes = {
    formInputs: [
        {
            id: 1,
            htmlFor: 'name',
            text: 'Name',
            placeholder: 'Your Name'
        },
        {
            id: 2,
            htmlFor: 'surname',
            text: 'Surname',
            placeholder: 'Your Surname'
        },
        {
            id: 3,
            htmlFor: 'patronymic',
            text: 'Patronymic',
            placeholder: 'Your Patronymic'
        }
    ],
    isImageSelected: false,
    isFormSubmited: false,
    currentImageURL: '',
    currentResponseInfo: [],
    currentRequestInfo: []
};

// /. initialState

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        setImageSelectedStatus(state, action: PayloadAction<boolean>) {
            state.isImageSelected = action.payload;
        },
        setImageURL(state, action: PayloadAction<string>) {
            state.currentImageURL = action.payload;
        },
        setFormSubmitStatus(state, action: PayloadAction<boolean>) {
            state.isFormSubmited = action.payload;
        },
        setResponseInfo(state, action: PayloadAction<any>) { // { id: number, message: string, status: string }[]
            state.currentResponseInfo = action.payload;
            // state.currentResponseInfo.splice(0, 1, action.payload);
        },
        setRequestInfo(state, action: PayloadAction<any>) {
            state.currentRequestInfo = action.payload;
        }
    }
});

export const {
    setImageSelectedStatus,
    setImageURL,
    setFormSubmitStatus,
    setResponseInfo,
    setRequestInfo
} = formSlice.actions;


export default formSlice.reducer;
