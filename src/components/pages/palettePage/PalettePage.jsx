import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPaletteTemplate, setPaletteVisibleStatus, setColorPickerStatus, setCurrentPaletteTemplateColor } from "../../../app/actions/paletteActions";
import Palette from "../../palette/Palette";
import { ChromePicker } from 'react-color'
import "./palettePage.scss"

const PalettePage = () => {
    const { isColorPickerVisible, currentPaletteData, currentPaletteTemplateID } = useSelector(state => state.paletteReducer)
    const [limit, setLimit] = useState(false)
    const [initaialColor, setColor] = useState("#ccc")
    const dispatch = useDispatch()
    const colorPicker = useRef()
    // 
    const addPaletteTemplate = () => {
        dispatch(addCurrentPaletteTemplate(
            {
                id: Math.floor(Math.random() * 1000),
                color: initaialColor
            }
        ))
        dispatch(setPaletteVisibleStatus(true))
        dispatch(setColorPickerStatus(true))
    }

    const setCurrentPickerColor = (updatedColor) => {
        dispatch(setCurrentPaletteTemplateColor(currentPaletteTemplateID, updatedColor))
        setColor(updatedColor)
    }

    const keyHandler = (e) => {
        if (e.code === "Escape") {
            dispatch(setColorPickerStatus(false))
        }
    }

    const defineValidColorPickerArea = (e) => {
        const validPickerArea = e.target === colorPicker.current || colorPicker.current.contains(e.target)
        const validElements = e.target.className === "palette__template" || e.target.className === "palette-page__button"
        if (!validPickerArea && !validElements) {
            dispatch(setColorPickerStatus(false))
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", keyHandler)
        document.addEventListener("click", defineValidColorPickerArea)
        return () => {
            document.removeEventListener("keydown", keyHandler)
            document.removeEventListener("click", defineValidColorPickerArea)
        }
    }, [isColorPickerVisible])

    useEffect(() => {
        if (currentPaletteData.length >= 8) { // disable ADD button
            setLimit(true)
        } else {
            setLimit(false)
        }
        // 
        if (currentPaletteData.length <= 0) { // hide ColorPicker
            dispatch(setColorPickerStatus(false))
        }
    }, [currentPaletteData])
    // 
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <div className="palette-page__palette">
                    <Palette />
                </div>
                <div ref={colorPicker} className="palette-page__picker">
                    {
                        isColorPickerVisible
                            ?
                            <ChromePicker color={initaialColor} onChange={(updatedColor) => setCurrentPickerColor(updatedColor.hex)} />
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