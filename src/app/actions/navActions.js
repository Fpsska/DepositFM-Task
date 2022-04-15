export const ACTION_SET_ACTIVE_STATUS = "ACTION_SET_ACTIVE_STATUS"

// /. AC names

export const setActiveStatus = (status, id) => {
    return {
        type: ACTION_SET_ACTIVE_STATUS,
        payload: {
            status,
            id
        }
    }
}
