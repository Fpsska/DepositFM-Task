import React from "react";
import { useDispatch } from "react-redux";
import { setNameValue, setSurnameValue, setPatronymicValue } from "../../app/actions/formActions";

const FormTemplate = ({ text, placeholder, htmlFor }) => {
    const dispatch = useDispatch()
    // 
    const inputHandler = (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "")
        // define current input field
        if (htmlFor === "name") {
            dispatch(setNameValue(e.target.value))
        }
        if (htmlFor === "surname") {
            dispatch(setSurnameValue(e.target.value))
        }
        if (htmlFor === "patronymic") {
            dispatch(setPatronymicValue(e.target.value))
        }
    }
    // 
    return (
        <div className="form__field">
            <label className="form__label" htmlFor={htmlFor}>{text}</label>
            <input className="form__input" type="text" name={htmlFor} id={htmlFor} placeholder={placeholder} required onChange={inputHandler} />
        </div>
    )
}

export default FormTemplate;