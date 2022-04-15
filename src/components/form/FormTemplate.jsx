import React from "react";

const FormTemplate = ({ text, placeholder, id }) => {
    return (
        <div className="form__field">
            <label className="form__label" htmlFor={id}>{text}</label>
            <input className="form__input" type="text" id={id} placeholder={placeholder} />
        </div>
    )
}

export default FormTemplate;