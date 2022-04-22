export const ACTION_SET_ACTIVE_STATUS = 'ACTION_SET_ACTIVE_STATUS';
export const ACTION_SET_FORM_PAGE_STATUS = 'ACTION_SET_FORM_PAGE_STATUS';

// /. AC names

export const setActiveStatus = (status, id) => {
    return {
        type: ACTION_SET_ACTIVE_STATUS,
        payload: {
            status,
            id,
        },
    };
};

export const setFormPageStatus = (status) => {
    return {
        type: ACTION_SET_FORM_PAGE_STATUS,
        payload: status,
    };
};