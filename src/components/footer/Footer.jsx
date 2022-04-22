import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setResponseInfo, setRequestInfo } from '../../app/reducers/formSlice';
import './footer.scss';

const Footer = () => {
    const { isFormPage } = useSelector(state => state.navReducer);
    const { isFormSubmited, currentResponseInfo, currentRequestInfo } = useSelector(state => state.formSlice);
    const dispatch = useDispatch();
    // 
    useEffect(() => {
        dispatch(setRequestInfo({ message: 'waiting for submit', status: 'waiting for submit' }));
        dispatch(setResponseInfo({ message: 'waiting for submit', status: 'waiting for submit' }));
    }, []);
    // 
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                {isFormPage
                    ?
                    <div className="response">
                        <span className="response__text">Response</span>
                        <div className="response__information">
                            <span className="response__status">{`Status: ${isFormSubmited ? currentRequestInfo.status : currentResponseInfo.status}`}</span>
                            <span className="response__message">{`Message:  ${isFormSubmited ? currentRequestInfo.message : currentResponseInfo.message}`}</span>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </footer>
    );
};

export default Footer;