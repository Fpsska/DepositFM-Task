import React from "react";
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="response">
                    <span className="response__text">Response</span>
                    <textarea className="response__input" name="response" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </footer>
    )
}

export default Footer;