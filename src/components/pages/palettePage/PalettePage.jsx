import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPaletteTemplate, setPaletteVisibleStatus, setColorPickerStatus, setCurrentPaletteTemplateColor } from "../../../app/actions/paletteActions";
import Palette from "../../palette/Palette";
import { ChromePicker } from 'react-color'
import "./palettePage.scss"

const PalettePage = () => {
    const { isColorPickerVisible } = useSelector(state => state.paletteReducer)
    const dispatch = useDispatch()
    // 
    const addPaletteTemplate = () => {
        dispatch(addCurrentPaletteTemplate(1))
        dispatch(setPaletteVisibleStatus(true))
        setTimeout(() => {
            dispatch(setColorPickerStatus(true))
        }, 100);
    }

    const setCurrentPickerColor = (color) => {
        console.log(color)
        dispatch(setCurrentPaletteTemplateColor(1, color))
    }

    const keyHandler = (e) => {
        if (e.code === "Escape") {
            console.log("!!!")
            dispatch(setColorPickerStatus(false))
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keyHandler)
        return () => {
            window.removeEventListener("keydown", keyHandler)
        }
    }, [])
    // 
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <Palette />
                {
                    isColorPickerVisible
                        ?
                        <ChromePicker color={"#fff"} onChange={(updatedColor) => setCurrentPickerColor(updatedColor.hex)} />
                        :
                        <></>
                }
                <button className="palette-page__button" onClick={addPaletteTemplate}>Add color</button>
            </div>
        </div>
    )
}

export default PalettePage;