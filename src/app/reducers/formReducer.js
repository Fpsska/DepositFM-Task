import { ACTION_SET_IMAGE_SELECTED_STATUS, ACTION_SET_FORM_SUBMIT_STATUS } from "../actions/formActions"

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
        }
    ],
    isImageSelected: false,
    isFormSubmit: false
};

// /. state

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_IMAGE_SELECTED_STATUS:
            return {
                ...state,
                isImageSelected: action.payload
            }
        case ACTION_SET_FORM_SUBMIT_STATUS:
            return {
                ...state,
                isFormSubmit: action.payload
            }
        default:
            return state;
    }
};

export default formReducer;