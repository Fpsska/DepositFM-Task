import React from "react";
import { useSelector } from "react-redux";
import FormTemplate from "./FormTemplate";
import "./form.scss"

const Form = () => {
    const { formInputs } = useSelector(state => state.formReducer)
    // 
    return (
        <form className="form">
            <div className="form__wrapper">
                <>
                    {formInputs.map(item => {
                        return (
                            <FormTemplate
                                key={item.id}
                                htmlFor={item.id}
                                text={item.text}
                                placeholder={item.placeholder}
                            />
                        )
                    })}
                </>
                <div className="form__field file">
                    <span className="file__text">Photo</span>
                    <input className="file__input" type="file" id="file" accept="image/*" />
                    <label className="file__label" htmlFor="file"></label>
                </div>

                <button className="form__button">Save</button>
                
            </div>
        </form>
    )
}

export default Form;