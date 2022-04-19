import React from "react";
import { useDefineInput } from "../../hooks/defineInput";

const FormTemplate = ({ text, placeholder, htmlFor }) => {
    const { handleInputName } = useDefineInput()
    // 
    const inputHandler = (e, inputName) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "")
        handleInputName(e, inputName)
    }
    // 
    return (
        <div className="form__field">
            <label className="form__label" htmlFor={htmlFor}>{text}</label>
            <input className="form__input" type="text" name={htmlFor} id={htmlFor} placeholder={placeholder} required onChange={(e) => inputHandler(e, htmlFor)} />
        </div>
    )
}

export default FormTemplate;