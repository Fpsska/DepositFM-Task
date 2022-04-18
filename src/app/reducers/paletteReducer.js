import {
    ACTION_SET_PALETTE_VISIBLE_STATUS,
    ACTION_ADD_CURRENT_PALETTE_TEMPLATE,
    ACTION_DELETE_CURRENT_PALETTE_TEMPLATE
} from "../actions/paletteActions";
// /. imports

const initialState = {
    paletteData: [
        {
            id: 1,
            color: "#ff453a",
            isSelected: false,
        },
        {
            id: 2,
            color: "#ff9f0a",
            isSelected: false,
        },
        {
            id: 3,
            color: "#ffd60a",
            isSelected: false,
        },
        {
            id: 4,
            color: "#32d74b",
            isSelected: false,
        },
        {
            id: 5,
            color: "#64d2ff",
            isSelected: false,
        },
        {
            id: 6,
            color: "#0a84ff",
            isSelected: false,
        },
        {
            id: 7,
            color: "#bf5af2",
            isSelected: false,
        },
        {
            id: 8,
            color: "#ff375f",
            isSelected: false,
        },
    ],
    currentPaletteData: [],
    isPaletteVisible: false
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
                currentPaletteData: state.paletteData.filter(item => item.id === action.payload.id),
            }
        case ACTION_DELETE_CURRENT_PALETTE_TEMPLATE:
            return {
                ...state,
                currentPaletteData: state.currentPaletteData.filter(item => item.id !== action.payload.id),
            }
        default:
            return state;
    }
};

export default paletteReducer;
