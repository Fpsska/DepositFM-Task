import React from "react";

const PaletteTemplate = ({ color, isSelected }) => {
    return (
        <div style={{ backgroundColor: color }} className={isSelected ? "palette__template selected" : "palette__template"} ></div >
    )
}

export default PaletteTemplate;