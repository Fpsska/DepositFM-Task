import React from "react";
import { useDispatch } from "react-redux";
import Palette from "../../palette/Palette";
import { addCurrentPaletteTemplate, setPaletteVisibleStatus } from "../../../app/actions/paletteActions";
import "./palettePage.scss"

const PalettePage = () => {
    const dispatch = useDispatch()
    // 
    const addPaletteTemplate = () => {
        dispatch(addCurrentPaletteTemplate(1))
        dispatch(setPaletteVisibleStatus(true))
    }
    // 
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <Palette />
                <button className="palette-page__button" onClick={addPaletteTemplate}>Add color</button>
            </div>
        </div>
    )
}

export default PalettePage;