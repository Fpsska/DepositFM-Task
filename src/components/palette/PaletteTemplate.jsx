import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { deleteCurrentPaletteTemplate, setColorPickerStatus, setCurrentPaletteTemplateID } from '../../app/reducers/paletteSlice';

const PaletteTemplate = ({ color, id }) => {
    const dispatch = useDispatch();
    // 
    const deletePaletteTemplate = () => {
        dispatch(deleteCurrentPaletteTemplate(id));
    };

    const openColorPicker = () => {
        dispatch(setColorPickerStatus(true));
        dispatch(setCurrentPaletteTemplateID(id));
    };

    useEffect(() => {  // set current ID for define necessary item in currentPaletteData
        dispatch(setCurrentPaletteTemplateID(id));
    }, [id]);
    // 
    return (
        <div style={{ backgroundColor: color }} className="palette__template" id={id} onClick={openColorPicker}>
            <button className="palette__button palette__button--delete" onClick={deletePaletteTemplate}></button>
        </div >
    );
};

export default PaletteTemplate;