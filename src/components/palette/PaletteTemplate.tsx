import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';

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

    const dispatch = useAppDispatch();


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

    return (
        <div className="palette__template" id={id} style={{ backgroundColor: color }} onClick={openColorPicker}>
            <button className="palette__button palette__button--delete" onClick={deletePaletteTemplate}></button>
        </div >
    );
};

export default PaletteTemplate;