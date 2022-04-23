import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { formInputsTypes, currentResponseInfoTypes, currentRequestInfoTypes } from '../../Types/formSliceTypes';

// /. imports

interface formSliceTypes {
    isImageSelected: boolean,
    isFormSubmited: boolean,
    currentImageURL: string,
    currentName: string,
    currentSurname: string
    currentPatronymic: string,
    currentResponseInfo: currentResponseInfoTypes[],
    currentRequestInfo: currentRequestInfoTypes[],
    formInputs: formInputsTypes[],
}

// /. interfaces

const initialState: formSliceTypes = {
    formInputs: [
        {
            id: 1,
            htmlFor: 'name',
            text: 'Name',
            placeholder: 'Your Name',
        },
        {
            id: 2,
            htmlFor: 'surname',
            text: 'Surname',
            placeholder: 'Your Surname',
        },
        {
            id: 3,
            htmlFor: 'patronymic',
            text: 'Patronymic',
            placeholder: 'Your Patronymic',
        },
    ],
    isImageSelected: false,
    isFormSubmited: false,
    currentImageURL: '',
    currentName: '',
    currentSurname: '',
    currentPatronymic: '',
    currentResponseInfo: [],
    currentRequestInfo: [],
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
        setNameValue(state, action: PayloadAction<string>) {
            state.currentName = action.payload;
        },
        setSurnameValue(state, action: PayloadAction<string>) {
            state.currentSurname = action.payload;
        },
        setPatronymicValue(state, action: PayloadAction<string>) {
            state.currentPatronymic = action.payload;
        },
        setResponseInfo(state, action: PayloadAction<currentResponseInfoTypes[]>) {
            state.currentResponseInfo = action.payload;
        },
        setRequestInfo(state, action: PayloadAction<currentRequestInfoTypes[]>) {
            state.currentRequestInfo = action.payload;
        },
    },
});

export const {
    setImageSelectedStatus,
    setImageURL,
    setFormSubmitStatus,
    setNameValue,
    setSurnameValue,
    setPatronymicValue,
    setResponseInfo,
    setRequestInfo,
} = formSlice.actions;


export default formSlice.reducer;
