import React from "react";
import "./form.scss"

const Form = () => {
    return (
        <form className="form">
            <div className="form__wrapper">

                <div className="form__field">
                    <label className="form__label" htmlFor="name">Name</label>
                    <input className="form__input" type="text" id="name" placeholder="Your Name" />
                </div>

                <div className="form__field">
                    <label className="form__label" htmlFor="surname">Surname</label>
                    <input className="form__input" type="text" id="surname" placeholder="Your Surname" />
                </div>

                <div className="form__field">
                    <label className="form__label" htmlFor="patronymic">Patronymic</label>
                    <input className="form__input" type="text" id="patronymic" placeholder="Your Patronymic" />
                </div>

                <div className="form__field file">
                    <span className="file__text">Photo</span>
                        <input className="file__input" type="file" id="file" accept="image/*"/>
                        <label className="file__label" htmlFor="file"></label>
                </div>

                <button className="form__button">Save</button>


                <div className="form__field response">
                    <span className="response__text">Response</span>
                    <textarea className="response__input" name="response" id="" cols="30" rows="10"></textarea>
                </div>

            </div>

        </form>
    )
}

export default Form;