import {
    ACTION_SET_IMAGE_SELECTED_STATUS,
    ACTION_SET_IMAGE_URL,
    ACTION_SET_FORM_SUBMIT_STATUS,
    ACTION_SET_NAME_VALUE,
    ACTION_SET_SURNAME_VALUE,
    ACTION_SET_PATRONYMIC_VALUE,
    ACTION_SET_RESPONSE_INFO,
    ACTION_SET_REQUEST_INFO,
} from '../actions/formActions';

// /. imports

const initialState = {
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

// /. state

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_IMAGE_SELECTED_STATUS:
            return {
                ...state,
                isImageSelected: action.payload,
            };
        case ACTION_SET_IMAGE_URL:
            return {
                ...state,
                currentImageURL: action.payload,
            };
        case ACTION_SET_FORM_SUBMIT_STATUS:
            return {
                ...state,
                isFormSubmited: action.payload,
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
        case ACTION_SET_RESPONSE_INFO:
            return {
                ...state,
                currentResponseInfo: action.payload,
            };
        case ACTION_SET_REQUEST_INFO:
            return {
                ...state,
                currentRequestInfo: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;
