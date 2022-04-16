import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss"

const Footer = () => {
    const { isFormPage, setFetchErrorMessage } = useSelector(state => state.navReducer)
    // 
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                {isFormPage
                    ?
                    <div className="response">
                        <span className="response__text">Response</span>
                        <div className="response__information">{`Message: ${setFetchErrorMessage}`}</div>
                    </div>
                    :
                    <></>
                }
            </div>
        </footer>
    )
}

export default Footer;