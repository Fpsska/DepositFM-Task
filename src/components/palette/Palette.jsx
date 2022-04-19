import React from "react";
import PaletteTemplate from "./PaletteTemplate";
import { useSelector } from "react-redux";
import "./palette.scss"

const Palette = () => {
    const { currentPaletteData, isPaletteVisible } = useSelector(state => state.paletteReducer)
    // 
    return (
        <div className="palette">
            <div className="palette__wrapper">
                {
                    isPaletteVisible
                        ?
                        <>
                            {currentPaletteData.map(item => {
                                return (
                                    <PaletteTemplate
                                        key={item.id}
                                        id={item.id}
                                        color={item.color}
                                        currentPaletteData={currentPaletteData}
                                    />
                                )
                            })}
                        </>
                        :
                        <></>
                }
            </div>
        </div>
    )
}

export default Palette;