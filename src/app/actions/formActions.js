export const ACTION_SET_IMAGE_SELECTED_STATUS = "ACTION_SET_IMAGE_SELECTED_STATUS"
export const ACTION_SET_FORM_SUBMIT_STATUS = "ACTION_SET_IMAGE_SELECTED_STATUS"
export const ACTION_SET_NAME_VALUE = "ACTION_SET_NAME_VALUE"
export const ACTION_SET_SURNAME_VALUE = "ACTION_SET_SURNAME_VALUE"
export const ACTION_SET_PATRONYMIC_VALUE = "ACTION_SET_PATRONYMIC_VALUE"

export const ACTION_SET_FETCH_ERROR_MESSAGE = "ACTION_SET_FETCH_ERROR_MESSAGE"
export const ACTION_SET_RESPONSE_INFO = "ACTION_SET_RESPONSE_INFO"

// /. AC names

export const setImageSelectedStatus = (status) => {
    return {
        type: ACTION_SET_IMAGE_SELECTED_STATUS,
        payload: status
    }
}

export const setFormSubmitStatus = (status) => {
    return {
        type: ACTION_SET_FORM_SUBMIT_STATUS,
        payload: status
    }
}

export const setNameValue = (value) => {
    return {
        type: ACTION_SET_NAME_VALUE,
        payload: value
    }
}

export const setSurnameValue = (value) => {
    return {
        type: ACTION_SET_SURNAME_VALUE,
        payload: value
    }
}

export const setPatronymicValue = (value) => {
    return {
        type: ACTION_SET_PATRONYMIC_VALUE,
        payload: value
    }
}

export const setFetchErrorMessage = (value) => {
    return {
        type: ACTION_SET_FETCH_ERROR_MESSAGE,
        payload: value
    }
}

export const setResponseInfo = (data) => {
    return {
        type: ACTION_SET_RESPONSE_INFO,
        payload: data
    }
}


