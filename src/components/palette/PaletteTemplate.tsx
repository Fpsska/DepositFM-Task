import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { deleteCurrentPaletteTemplate, setCurrentPaletteTemplateID } from '../../app/slices/paletteSlice';

// /. imports

interface PaletteTemplatePropTypes {
    id: string,
    color: string,
    setVisibleStatus: (arg: boolean) => void
}

// /. interfaces

const PaletteTemplate: React.FC<PaletteTemplatePropTypes> = (props) => {

    const {
        id,
        color,
        setVisibleStatus
    } = props;

    const dispatch = useDispatch();
    // 
    const deletePaletteTemplate = (): void => {
        dispatch(deleteCurrentPaletteTemplate(id));
    };

    const openColorPicker = (): void => {
        dispatch(setCurrentPaletteTemplateID(id));
        setVisibleStatus(true);
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