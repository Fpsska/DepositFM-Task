export const ACTION_SET_IMAGE_SELECTED_STATUS = "ACTION_SET_IMAGE_SELECTED_STATUS"
export const ACTION_SET_FORM_SUBMIT_STATUS = "ACTION_SET_IMAGE_SELECTED_STATUS"

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


