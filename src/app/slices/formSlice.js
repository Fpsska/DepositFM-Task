import { createSlice } from '@reduxjs/toolkit';

// /. imports

const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
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
    },
    reducers: {
        setImageSelectedStatus(state, action) {
            state.isImageSelected = action.payload;
        },
        setImageURL(state, action) {
            state.currentImageURL = action.payload;
        },
        setFormSubmitStatus(state, action) {
            state.isFormSubmited = action.payload;
        },
        setNameValue(state, action) {
            state.currentName = action.payload;
        },
        setSurnameValue(state, action) {
            state.currentSurname = action.payload;
        },
        setPatronymicValue(state, action) {
            state.currentPatronymic = action.payload;
        },
        setResponseInfo(state, action) {
            state.currentResponseInfo = action.payload;
        },
        setRequestInfo(state, action) {
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
