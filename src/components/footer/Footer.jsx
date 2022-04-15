import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss"

const Footer = () => {
    const { isFormPage } = useSelector(state => state.navReducer)
    // 
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                {isFormPage
                    ?
                    <div className="response">
                        <span className="response__text">Response</span>
                        <textarea className="response__input" name="response" id="" cols="30" rows="10"></textarea>
                    </div>
                    :
                    <></>
                }
            </div>
        </footer>
    )
}

export default Footer;