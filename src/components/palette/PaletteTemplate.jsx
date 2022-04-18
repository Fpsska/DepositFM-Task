import React from "react";
import { useDispatch } from "react-redux";
import { deleteCurrentPaletteTemplate } from "../../app/actions/paletteActions";

const PaletteTemplate = ({ color }) => {
    const dispatch = useDispatch()
    // 
    const deletePaletteTemplate = () => {
        dispatch(deleteCurrentPaletteTemplate(1))
    }
    // 
    return (
        <div style={{ backgroundColor: color }} className="palette__template">
            <button className="palette__button palette__button--delete" onClick={deletePaletteTemplate}></button>
        </div >
    )
}

export default PaletteTemplate;