export const ACTION_SET_IMAGE_SELECTED_STATUS = 'ACTION_SET_IMAGE_SELECTED_STATUS';
export const ACTION_SET_IMAGE_URL = 'ACTION_SET_IMAGE_URL';

export const ACTION_SET_FORM_SUBMIT_STATUS = 'ACTION_SET_FORM_SUBMIT_STATUS';

export const ACTION_SET_NAME_VALUE = 'ACTION_SET_NAME_VALUE';
export const ACTION_SET_SURNAME_VALUE = 'ACTION_SET_SURNAME_VALUE';
export const ACTION_SET_PATRONYMIC_VALUE = 'ACTION_SET_PATRONYMIC_VALUE';

export const ACTION_SET_RESPONSE_INFO = 'ACTION_SET_RESPONSE_INFO';
export const ACTION_SET_REQUEST_INFO = 'ACTION_SET_REQUEST_INFO';

// /. AC names

export const setImageSelectedStatus = (status) => {
    return {
        type: ACTION_SET_IMAGE_SELECTED_STATUS,
        payload: status,
    };
};

export const setImageURL = (value) => {
    return {
        type: ACTION_SET_IMAGE_URL,
        payload: value,
    };
};


export const setFormSubmitStatus = (status) => {
    return {
        type: ACTION_SET_FORM_SUBMIT_STATUS,
        payload: status,
    };
};

export const setNameValue = (value) => {
    return {
        type: ACTION_SET_NAME_VALUE,
        payload: value,
    };
};

export const setSurnameValue = (value) => {
    return {
        type: ACTION_SET_SURNAME_VALUE,
        payload: value,
    };
};

export const setPatronymicValue = (value) => {
    return {
        type: ACTION_SET_PATRONYMIC_VALUE,
        payload: value,
    };
};

export const setResponseInfo = (data) => {
    return {
        type: ACTION_SET_RESPONSE_INFO,
        payload: data,
    };
};

export const setRequestInfo = (data) => {
    return {
        type: ACTION_SET_REQUEST_INFO,
        payload: data,
    };
};


