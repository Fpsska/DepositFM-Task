import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPaletteTemplate, setPaletteVisibleStatus, setColorPickerStatus, setCurrentPaletteTemplateColor } from "../../../app/actions/paletteActions";
import Palette from "../../palette/Palette";
import { ChromePicker } from 'react-color'
import "./palettePage.scss"

const PalettePage = () => {
    const { isColorPickerVisible, currentPaletteData } = useSelector(state => state.paletteReducer)
    const [limit, setLimit] = useState(false)
    const dispatch = useDispatch()
    // 
    const addPaletteTemplate = () => {
        dispatch(addCurrentPaletteTemplate(
            {
                id: Math.floor(Math.random() * 100),
                color: "#ccc"
            }
        ))
        dispatch(setPaletteVisibleStatus(true))
        setTimeout(() => {
            dispatch(setColorPickerStatus(true))
        }, 100);
    }

    const setCurrentPickerColor = (color) => {
        dispatch(setCurrentPaletteTemplateColor(1, color))
    }

    const keyHandler = (e) => {
        if (e.code === "Escape") {
            dispatch(setColorPickerStatus(false))
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keyHandler)
        return () => {
            window.removeEventListener("keydown", keyHandler)
        }
    }, [])

    useEffect(() => {
        if (currentPaletteData.length >= 8) {  // don't work :(
            setLimit(true)
        } else {
            setLimit(false)
        }
    }, [currentPaletteData])
    // 
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <div className="palette-page__palette">
                    <Palette />
                </div>
                <div className="palette-page__picker">
                    {
                        isColorPickerVisible
                            ?
                            <ChromePicker color={"#fff"} onChange={(updatedColor) => setCurrentPickerColor(updatedColor.hex)} />
                            :
                            <></>
                    }
                </div>
                <button className="palette-page__button" disabled={limit ? true : false} onClick={addPaletteTemplate}>Add color</button>
            </div>
        </div>
    )
}

export default PalettePage;