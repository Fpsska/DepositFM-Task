import React from "react";
import PaletteTemplate from "./PaletteTemplate";
import { useSelector } from "react-redux";
import "./palette.scss"

const Palette = () => {
    const { paletteTemplates } = useSelector(state => state.paletteReducer)
    // 
    return (
        <div className="palette">
            <div className="palette__wrapper">
                {paletteTemplates.map(item => {
                    return (
                        <PaletteTemplate
                            key={item.id}
                            color={item.color}
                            isSelected={item.isSelected}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Palette;