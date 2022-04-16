import {
    ACTION_SET_IMAGE_SELECTED_STATUS,
    ACTION_SET_FORM_SUBMIT_STATUS,
    ACTION_SET_NAME_VALUE,
    ACTION_SET_SURNAME_VALUE,
    ACTION_SET_PATRONYMIC_VALUE,
    ACTION_SET_FETCH_ERROR_MESSAGE
} from "../actions/formActions";

// /. imports

const initialState = {
    formInputs: [
        {
            id: 1,
            htmlFor: "name",
            text: "Name",
            placeholder: "Your Name",
        },
        {
            id: 2,
            htmlFor: "surname",
            text: "Surname",
            placeholder: "Your Surname",
        },
        {
            id: 3,
            htmlFor: "patronymic",
            text: "Patronymic",
            placeholder: "Your Patronymic",
        },
    ],
    isImageSelected: false,
    isFormSubmit: false,
    currentName: "",
    currentSurname: "",
    currentPatronymic: "",
    setFetchErrorMessage: ""
};

// /. state

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_IMAGE_SELECTED_STATUS:
            return {
                ...state,
                isImageSelected: action.payload,
            };
        case ACTION_SET_FORM_SUBMIT_STATUS:
            return {
                ...state,
                isFormSubmit: action.payload,
            };
        case ACTION_SET_NAME_VALUE:
            return {
                ...state,
                currentName: action.payload,
            };
        case ACTION_SET_SURNAME_VALUE:
            return {
                ...state,
                currentSurname: action.payload,
            };
        case ACTION_SET_PATRONYMIC_VALUE:
            return {
                ...state,
                currentPatronymic: action.payload,
            };
        case ACTION_SET_FETCH_ERROR_MESSAGE:
            return {
                ...state,
                setFetchErrorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;
