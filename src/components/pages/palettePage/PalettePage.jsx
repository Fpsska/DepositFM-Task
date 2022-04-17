import React from "react";
import Palette from "../../palette/Palette";
import "./palettePage.scss"

const PalettePage = () => {
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <Palette />
                <button className="palette-page__button">Add color</button>
            </div>
        </div>
    )
}

export default PalettePage;