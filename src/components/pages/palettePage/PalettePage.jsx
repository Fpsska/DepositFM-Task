import React from "react";
import "./palettePage.scss"

const PalettePage = () => {
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">

                <div className="palette">
                    <div className="palette__wrapper">
                        <div className="palette__template palette__template--firts"></div>
                        <div className="palette__template palette__template--second"></div>
                        <div className="palette__template palette__template--third"></div>
                        <div className="palette__template palette__template--fourth"></div>
                        <div className="palette__template palette__template--fifth"></div>
                        <div className="palette__template palette__template--sixth"></div>
                        <div className="palette__template palette__template--seventh"></div>
                        <div className="palette__template palette__template--eighth"></div>
                    </div>
                </div>

                <button className="palette-page__button">Add color</button>
            </div>
        </div>
    )
}

export default PalettePage;