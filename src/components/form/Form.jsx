import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImageSelectedStatus, setFormSubmitStatus } from "../../app/actions/formActions";
import FormTemplate from "./FormTemplate";
import "./form.scss"

const Form = () => {
    const { formInputs, isImageSelected, currentName, currentSurname, currentPatronymic } = useSelector(state => state.formReducer)
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        dispatch(setFormSubmitStatus(true));

        try {
            const response = await fetch("https://test-job.pixli.app/send.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // your expected POST request payload goes here
                    action: "send_data",
                    id: 1,
                    image: image,
                    contact: { currentName, currentSurname, currentPatronymic },
                })
            });
            const data = await response.json();
            // enter you logic when the fetch is successful
            console.log(data);
        } catch (error) {
            // enter your logic for when there is an error (ex. error toast)
            console.log(error)
        }
    }

    // 
    return (
        <form className="form" action="https://test-job.pixli.app/send.php" method="POST" encType="multipart/form-data" onSubmit={handleFormSubmit}>
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
                                <input className="file__input" type="file" id="file" accept="image/*" required onChange={setNewImage} />
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