import {

} from "../actions/paletteActions";
// /. imports

const initialState = {
    paletteTemplates: [
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
    isPaletteVisible: false
};

// /. state

const paletteReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default paletteReducer;
