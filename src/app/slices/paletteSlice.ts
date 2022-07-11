import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { currentPaletteDataTypes } from '../../Types/paletteSliceTypes';

// /. imports

interface paletteSliceTypes {
    currentPaletteData: currentPaletteDataTypes[],
    isPaletteVisible: boolean,
    currentPaletteTemplateID: string
};

interface setCurrentPaletteTemplateColorTypes {
    id: string,
    value: string
};

// /. interfaces

const initialState: paletteSliceTypes = {
    currentPaletteData: [],
    isPaletteVisible: false,
    currentPaletteTemplateID: '0'
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
        setCurrentPaletteTemplateColor(state, action: PayloadAction<setCurrentPaletteTemplateColorTypes>) {
            const { id, value } = action.payload;
            state.currentPaletteData.map(item => item.id === id ? item.color = value : item);
        },
        setCurrentPaletteTemplateID(state, action: PayloadAction<string>) {
            state.currentPaletteTemplateID = action.payload;
        }
    }
});


export const {
    setPaletteVisibleStatus,
    addCurrentPaletteTemplate,
    deleteCurrentPaletteTemplate,
    setCurrentPaletteTemplateColor,
    setCurrentPaletteTemplateID
} = paletteSlice.actions;


export default paletteSlice.reducer;
