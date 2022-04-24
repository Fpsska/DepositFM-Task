import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { currentPaletteDataTypes } from '../../Types/paletteSliceTypes';

// /. imports

interface paletteSliceTypes {
    currentPaletteData: currentPaletteDataTypes[],
    isPaletteVisible: boolean,
    isColorPickerVisible: boolean,
    currentPaletteTemplateID: string,
};

interface setCurrentPaletteTemplateColorTypes {
    id: string,
    value: string,
};

// /. interfaces

const initialState: paletteSliceTypes = {
    currentPaletteData: [],
    isPaletteVisible: false,
    isColorPickerVisible: false,
    currentPaletteTemplateID: '0',
};

// /. initialState

const paletteSlice = createSlice({
    name: 'paletteSlice',
    initialState,
    reducers: {
        setPaletteVisibleStatus(state, action: PayloadAction<boolean>) {
            state.isPaletteVisible = action.payload;
        },
        addCurrentPaletteTemplate(state, action: PayloadAction<currentPaletteDataTypes>) {
            state.currentPaletteData.push(action.payload);
        },
        deleteCurrentPaletteTemplate(state, action: PayloadAction<string>) {
            state.currentPaletteData = state.currentPaletteData.filter(item => item.id !== action.payload);
        },
        setColorPickerStatus(state, action: PayloadAction<boolean>) {
            state.isColorPickerVisible = action.payload;
        },
        setCurrentPaletteTemplateColor(state, action: PayloadAction<setCurrentPaletteTemplateColorTypes>) {
            const { id, value } = action.payload;
            state.currentPaletteData.map(item => {
                if (item.id === id) {
                    return item.color = value;
                } else {
                    return item;
                }
            });
        },
        setCurrentPaletteTemplateID(state, action: PayloadAction<string>) {
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
