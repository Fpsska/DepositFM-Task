import {
    ACTION_SET_PALETTE_VISIBLE_STATUS,
    ACTION_ADD_CURRENT_PALETTE_TEMPLATE,
    ACTION_DELETE_CURRENT_PALETTE_TEMPLATE,
    ACTION_SET_COLOR_PICKER_STATUS,
    ACTION_SET_CURRENT_PALETTE_TEMPLATE_COLOR,
    ACTION_SET_CURRENT_PALETTE_TEMPLATE_ID,
} from '../actions/paletteActions';
// /. imports

const initialState = {
    currentPaletteData: [],
    isPaletteVisible: false,
    isColorPickerVisible: false,
    currentPaletteTemplateID: 0,
};

// /. state

const paletteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_PALETTE_VISIBLE_STATUS:
            return {
                ...state,
                isPaletteVisible: action.payload.status,
            };
        case ACTION_ADD_CURRENT_PALETTE_TEMPLATE:
            return {
                ...state,
                currentPaletteData: [...state.currentPaletteData, action.payload.data],
            };
        case ACTION_DELETE_CURRENT_PALETTE_TEMPLATE:
            return {
                ...state,
                currentPaletteData: state.currentPaletteData.filter(item => item.id !== action.payload.id),
            };
        case ACTION_SET_COLOR_PICKER_STATUS:
            return {
                ...state,
                isColorPickerVisible: action.payload.status,
            };
        case ACTION_SET_CURRENT_PALETTE_TEMPLATE_COLOR:
            return {
                ...state,
                currentPaletteData: state.currentPaletteData.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            color: action.payload.value,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        case ACTION_SET_CURRENT_PALETTE_TEMPLATE_ID:
            return {
                ...state,
                currentPaletteTemplateID: action.payload.id,
            };
        default:
            return state;
    }
};

export default paletteReducer;
