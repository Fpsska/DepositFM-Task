import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImageSelectedStatus, setFormSubmitStatus, setFetchErrorMessage } from "../../app/actions/formActions";
import { usePostRequest } from "../../hooks/postRequest";
import FormTemplate from "./FormTemplate";
import "./form.scss"

const Form = () => {
    const { formInputs, isImageSelected, currentName, currentSurname, currentPatronymic } = useSelector(state => state.formReducer)
    const [image, setImage] = useState("")
    const { request } = usePostRequest()
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

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        request("https://test-job.pixli.app/send.php", {
            action: "send_data",
            id: 1,
            image,
            contacts: { currentName, currentSurname, currentPatronymic }
        })
            .then((data) => {
                console.log("data:", data)
            })
            .then(() => dispatch(setFormSubmitStatus(true)))
            .catch((err) => console.log(err))
    }
    // 
    return (
        <form className="form" onSubmit={HandleFormSubmit}>
            <div className="form__wrapper">
                <>
                    {formInputs.map(item => {
                        return (
                            <FormTemplate
                                key={item.id}
                                htmlFor={item.htmlFor}
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
                            <img className="file__image" src={image} alt="chosenImage" />
                            :
                            <>
                                <input className="file__input" type="file" name="file" id="file" accept="image/*" required onChange={setNewImage} />
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