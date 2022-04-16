import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePostRequest } from "../../hooks/postRequest";
import "./footer.scss"

const Footer = () => {
    const { isFormPage, isFormSubmit } = useSelector(state => state.navReducer)
    const { status, error } = usePostRequest()
    useEffect(() => {
        console.log(isFormSubmit)
    }, [isFormSubmit])
    // 
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                {isFormPage
                    ?
                    <div className="response">
                        <span className="response__text">Response</span>
                        <div className="response__information">
                            <span>{`Status: ${status}`}</span>
                            <span>{`Message: ${error}`}</span>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </footer>
    )
}

export default Footer;