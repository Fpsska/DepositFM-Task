
export const ACTION_SET_PALETTE_VISIBLE_STATUS = "ACTION_SET_PALETTE_VISIBLE_STATUS"
export const ACTION_ADD_CURRENT_PALETTE_TEMPLATE = "ACTION_ADD_CURRENT_PALETTE_TEMPLATE"
export const ACTION_DELETE_CURRENT_PALETTE_TEMPLATE = "ACTION_DELETE_CURRENT_PALETTE_TEMPLATE"

// /. AC names

export const setPaletteVisibleStatus = (status) => {
    return {
        type: ACTION_SET_PALETTE_VISIBLE_STATUS,
        payload: { status }
    }
}

export const addCurrentPaletteTemplate = (id) => {
    return {
        type: ACTION_ADD_CURRENT_PALETTE_TEMPLATE,
        payload: { id }
    }
}

export const deleteCurrentPaletteTemplate = (id) => {
    return {
        type: ACTION_DELETE_CURRENT_PALETTE_TEMPLATE,
        payload: { id }
    }
}





