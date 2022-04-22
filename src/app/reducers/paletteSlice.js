import { createSlice } from '@reduxjs/toolkit';

// /. imports

const paletteSlice = createSlice({
    name: 'paletteSlice',
    initialState: {
        currentPaletteData: [],
        isPaletteVisible: false,
        isColorPickerVisible: false,
        currentPaletteTemplateID: 0,
    },
    reducers: {
        setPaletteVisibleStatus(state, action) {
            state.isPaletteVisible = action.payload;
        },
        addCurrentPaletteTemplate(state, action) {
            state.currentPaletteData.push(action.payload);
        },
        deleteCurrentPaletteTemplate(state, action) {
            state.currentPaletteData = state.currentPaletteData.filter(item => item.id !== action.payload);
        },
        setColorPickerStatus(state, action) {
            state.isColorPickerVisible = action.payload;
        },
        setCurrentPaletteTemplateColor(state, action) {
            const { id, value } = action.payload;
            state.currentPaletteData.map(item => {
                if (item.id === id) {
                    return item.color = value;
                } else {
                    return item;
                }
            });
        },
        setCurrentPaletteTemplateID(state, action) {
            state.currentPaletteTemplateID = action.payload;
        },
    },
});


export const {
    setPaletteVisibleStatus,
    addCurrentPaletteTemplate,
    deleteCurrentPaletteTemplate,
    setColorPickerStatus,
    setCurrentPaletteTemplateColor,
    setCurrentPaletteTemplateID,
} = paletteSlice.actions;


export default paletteSlice.reducer;
