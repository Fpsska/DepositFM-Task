import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImageSelectedStatus, setFormSubmitStatus } from "../../app/actions/formActions";
import FormTemplate from "./FormTemplate";
import "./form.scss"

const Form = () => {
    const { formInputs, isImageSelected } = useSelector(state => state.formReducer)
    const [image, setImage] = useState("")
    const dispatch = useDispatch()
    // 
    const setNewImage = (e) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            setImage(fileReader.result)
        };

        dispatch(setImageSelectedStatus(true));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(setFormSubmitStatus(true));
    }

    // 
    return (
        <form className="form" onSubmit={handleFormSubmit}>
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
                    <>
                        {isImageSelected
                            ?
                            <img className="file__image" src={image} alt="image" />
                            :
                            <>
                                <input className="file__input" type="file" id="file" accept="image/*" required onChange={e => setNewImage(e)} />
                                <label className="file__label" htmlFor="file"></label>
                            </>
                        }
                    </>
                </div>

                <button className="form__button" disabled={isImageSelected ? false : true}>Save</button>

            </div>
        </form>
    )
}

export default Form;