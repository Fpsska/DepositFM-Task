import React, { useEffect } from "react";
import PaletteTemplate from "./PaletteTemplate";
import { useSelector } from "react-redux";
import "./palette.scss"

const Palette = () => {
    const { currentPaletteData, isPaletteVisible } = useSelector(state => state.paletteReducer)
    // 
    useEffect(() => {
        console.log(currentPaletteData)
    }, [currentPaletteData])
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
                                        color={item.color}
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