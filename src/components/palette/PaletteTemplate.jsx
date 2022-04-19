import React from "react";
import { useDispatch } from "react-redux";
import { deleteCurrentPaletteTemplate, setColorPickerStatus, setCurrentPaletteTemplateID } from "../../app/actions/paletteActions";

const PaletteTemplate = ({ color, id }) => {
    const dispatch = useDispatch()
    // 
    const deletePaletteTemplate = (e) => {
        dispatch(deleteCurrentPaletteTemplate(+e.target.parentNode.id))
    }

    const openColorPicker = (e) => {
        dispatch(setColorPickerStatus(true))
        dispatch(setCurrentPaletteTemplateID(+e.target.id))
    }
    // 
    return (
        <div style={{ backgroundColor: color }} className="palette__template" id={id} onClick={openColorPicker}>
            <button className="palette__button palette__button--delete" onClick={deletePaletteTemplate}></button>
        </div >
    )
}

export default PaletteTemplate;