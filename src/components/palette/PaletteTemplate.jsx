import React from "react";
import { useDispatch } from "react-redux";
import { deleteCurrentPaletteTemplate, setColorPickerStatus } from "../../app/actions/paletteActions";

const PaletteTemplate = ({ color, id }) => {
    const dispatch = useDispatch()
    // 
    const deletePaletteTemplate = (e) => {
        console.log(e.target.parentNode.id)
        dispatch(deleteCurrentPaletteTemplate(+e.target.parentNode.id))
    }

    const openColorPicker = () => {
        // dispatch(setColorPickerStatus(true))
        // console.log("!!!")
    }
    // 
    return (
        <div style={{ backgroundColor: color }} className="palette__template" id={id} onClick={openColorPicker}>
            <button className="palette__button palette__button--delete" onClick={deletePaletteTemplate}></button>
        </div >
    )
}

export default PaletteTemplate;