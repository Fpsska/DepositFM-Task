import {
    ACTION_SET_PALETTE_VISIBLE_STATUS,
    ACTION_ADD_CURRENT_PALETTE_TEMPLATE,
    ACTION_DELETE_CURRENT_PALETTE_TEMPLATE,
    ACTION_SET_COLOR_PICKER_STATUS,
    ACTION_SET_CURRENT_PALETTE_TEMPLATE_COLOR
} from "../actions/paletteActions";
// /. imports

const initialState = {
    paletteData: [
        {
            id: 1,
            color: "#ff453a"
        },
        {
            id: 2,
            color: "#ff9f0a",
        },
        {
            id: 3,
            color: "#ffd60a"
        },
        {
            id: 4,
            color: "#32d74b"
        },
        {
            id: 5,
            color: "#64d2ff"
        },
        {
            id: 6,
            color: "#0a84ff"
        },
        {
            id: 7,
            color: "#bf5af2"
        },
        {
            id: 8,
            color: "#ff375f"
        },
    ],
    currentPaletteData: [],
    isPaletteVisible: false,
    isColorPickerVisible: false
};

// /. state

const paletteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_PALETTE_VISIBLE_STATUS:
            return {
                ...state,
                isPaletteVisible: action.payload.status
            }
        case ACTION_ADD_CURRENT_PALETTE_TEMPLATE:
            return {
                ...state,
                currentPaletteData: [...state.currentPaletteData, action.payload.data]
            }
        case ACTION_DELETE_CURRENT_PALETTE_TEMPLATE:
            return {
                ...state,
                currentPaletteData: state.currentPaletteData.filter(item => item.id !== action.payload.id),
            }
        case ACTION_SET_COLOR_PICKER_STATUS:
            return {
                ...state,
                isColorPickerVisible: action.payload.status
            }
        case ACTION_SET_CURRENT_PALETTE_TEMPLATE_COLOR:
            return {
                ...state,
                currentPaletteData: state.currentPaletteData.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            color: action.payload.value
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state;
    }
};

export default paletteReducer;
